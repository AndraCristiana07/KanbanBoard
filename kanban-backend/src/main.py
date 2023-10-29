from __future__ import annotations

import json
from datetime import timedelta, datetime

from fastapi.exceptions import RequestValidationError
from jose import JWTError, jwt
from cassandra.auth import PlainTextAuthProvider
from cassandra.cluster import Cluster
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field, ValidationError
from uuid import uuid4, UUID
from typing import List, Annotated
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm, HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from starlette.requests import Request
from starlette.responses import PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.exception_handlers import (
    request_validation_exception_handler as _request_validation_exception_handler,
)

app = FastAPI()


def get_cassandra():
    auth_provider = PlainTextAuthProvider(username='cassandra', password='cassandra')
    cluster = Cluster(['db_center_cassandra'], auth_provider=auth_provider, port=9042)
    session = cluster.connect()
    return session


#
# origins = [
#     "http://localhost:5174",
#     "http://localhost:5173",
#     "http://localhost:8080",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Column(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    name: str


class Board(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    name: str
    members: List[str]
    columns: List[UUID]


class Task(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    title: str
    assignee: str
    assigned: List[str]
    column_id: str


class User(BaseModel):
    username: str
    passhash: str
    boards: List[str] = []


class LoginForm(BaseModel):
    username: str
    password: str


class SignUpForm(BaseModel):
    username: str
    password: str


class TokenData(BaseModel):
    username: str = None


class UserNotFound(BaseException):
    pass


# @app.exception_handler(RequestValidationError)
# def validation_exception_handler(request, exc: RequestValidationError):
#     for e in exc.errors():
#         e['loc'] = list(filter(lambda x: type(x) == str, e['loc']))
#         e.pop('url')
#     return PlainTextResponse(json.dumps(exc.errors()), status_code=400)


# @app.exception_handler(HTTPValidationError)
# def validation_exception_handler(request, exc: HTTPValidationError):
#     return PlainTextResponse('AAAAA', status_code=400)


# @app.exception_handler(ValidationError)
# def validation_exception_handler(request, exc: ValidationError):
#     return PlainTextResponse('AAAA', status_code=400)

@app.exception_handler(RequestValidationError)
async def request_validation_exception_handler(request: Request, exc: RequestValidationError):
    """
    This is a wrapper to the default RequestValidationException handler of FastAPI.
    This function will be called when client input is not valid.
    """
    print(exc)
    # body = await request.body()
    # query_params = request.query_params._dict  # pylint: disable=protected-access
    # detail = {"errors": exc.errors(), "body": body.decode(), "query_params": query_params}
    for e in exc.errors():
        e['loc'] = list(filter(lambda x: type(x) == str, e['loc']))
        e.pop('url')
    return await _request_validation_exception_handler(request, exc)


# creds

SECRET_KEY = '09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7'
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 31 * 12

security = OAuth2PasswordBearer(tokenUrl="token")


# security = HTTPBearer()


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_user(username):
    try:
        session = get_cassandra()
        result = session.execute(f'SELECT JSON * from my_key.users where username = \'{username}\' ALLOW FILTERING;')
        user = json.loads(*result[0])
        return User.model_validate(user)
    except IndexError:
        raise UserNotFound
    except ValidationError:
        raise UserNotFound


async def get_current_user(token: Annotated[str, Depends(security)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(token_data.username)
    if user is None:
        raise credentials_exception
    return user


def verify_password(password, hashed_password):
    return password == hashed_password


def authenticate_user(username: str, password: str):
    user = get_user(username)
    if not verify_password(password, user.passhash):
        return False
    return user


@app.post("/token")
async def login(form: Annotated[OAuth2PasswordRequestForm, Depends()]):
    try:
        print(form)
        user = authenticate_user(form.username, form.password)
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires
        )
        return {"access_token": access_token, "token_type": "bearer"}
    except UserNotFound:
        return HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )


@app.post("/signup")
async def signup(form: SignUpForm):
    try:
        get_user(form.username)
        return HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already registered")
    except UserNotFound:
        user = User(username=form.username, passhash=form.password)
        user.username = form.username
        user.passhash = form.password
        user.boards = []
        session = get_cassandra()
        session.execute(f'INSERT INTO my_key.users JSON \'{user.model_dump_json()}\'')
        return {}


# boards

@app.put("/board/update")
async def create_board(board: Board, current_user: Annotated[User, Depends(get_current_user)]):
    columns = [
        Column(**{"name": "TODOs"}),
        Column(**{"name": "WIP"}),
        Column(**{"name": "DONE"}),
    ]
    board.columns = list(map(lambda x: x.id, columns))
    board.members = [current_user.username]
    session = get_cassandra()
    for col in columns:
        session.execute(f'INSERT INTO my_key.columns JSON \'{col.model_dump_json()}\'')
    session.execute(f'INSERT INTO my_key.boards JSON \'{board.model_dump_json()}\'')
    current_user.boards.append(board.id)
    session.execute(
        f'UPDATE my_key.users SET boards = boards + [\'{board.id}\'] WHERE username = \'{current_user.username}\';')
    return {}


@app.delete("/board/delete")
async def delete_board(board_id, current_user: Annotated[User, Depends(get_current_user)]):
    if board_id not in current_user.boards:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='You don\'t have access to this board')

    session = get_cassandra()
    board = session.execute(f'SELECT JSON * from my_key.boards WHERE id = \'{board_id}\'')[0]
    board = Board.model_validate(json.loads(*board))

    for col in board.columns:
        session.execute(f"DELETE FROM my_key.tasks WHERE column_id=\'{col}\'")
        session.execute(f"DELETE FROM my_key.columns WHERE ID={col}")
    session.execute(f"DELETE FROM my_key.boards WHERE ID={board_id}")

    return {}


@app.get("/board")
async def get_board(board_id: UUID, current_user: Annotated[User, Depends(get_current_user)]):
    return json.loads(*get_cassandra().execute(f'SELECT JSON * from my_key.boards WHERE id = {board_id}')[0])


@app.get("/boardlist")
async def get_boardlist(current_user: Annotated[User, Depends(get_current_user)]):
    # print(current_user)
    print(current_user.boards)

    res = []
    for b in current_user.boards:
        res.append(await get_board(b, current_user))

    return res


#
# @app.post("/board/invite")
# async def invite_to_board(user_id, board_id, current_user: Annotated[User, Depends(get_current_user)]):
#     pass  # TODO


# @app.post("/board/respond_to_invite")
# async def respond_to_invite(board_id: UUID, answer: str, current_user: Annotated[User, Depends(get_current_user)]):
#     pass  # TODO


@app.post("/board/column/update")
async def update_column(board_id: UUID, column: Column, current_user: Annotated[User, Depends(get_current_user)]):
    if board_id not in current_user.boards:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    try:
        session = get_cassandra()
        board = session.execute(f'SELECT JSON * from my_key.boards WHERE id = \'{board_id}\'')[0]
        board = Board.model_validate(json.loads(*board))

        if column.id not in board.columns:
            session.execute(f'UPDATE my_key.boards SET columns = columns + [{board.columns}] WHERE id = {board_id};')

        session.execute(f'INSERT INTO my_key.columns JSON \'{column.model_dump_json()}\'')
        return {}
    except IndexError:
        return HTTPException(status_code=status.HTTP_404_NOT_FOUND)


@app.delete("/board/column/delete")
async def delete_column(board_id: UUID, column_id: UUID, current_user: Annotated[User, Depends(get_current_user)]):
    if board_id not in current_user.boards:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    session = get_cassandra()
    board = session.execute(f'SELECT JSON * from my_key.boards WHERE id = \'{board_id}\'')[0]
    board = Board.model_validate(json.loads(*board))
    session.execute(f'UPDATE my_key.boards SET columns = columns - [{board.columns}] WHERE id = {board_id};')

    session.execute(f"DELETE FROM my_key.tasks WHERE column_id=\'{column_id}\'")
    session.execute(f"DELETE FROM my_key.columns WHERE id={column_id}")


@app.get("/column")
async def get_column(column_id: UUID, current_user: Annotated[User, Depends(get_current_user)]):
    session = get_cassandra()
    return json.loads(*session.execute(f'SELECT JSON * FROM my_key.columns WHERE id={column_id}')[0])



# tasks


@app.post("/task/move")
async def move_task(task_id: str, dest: UUID, current_user: Annotated[User, Depends(get_current_user)]):
    session = get_cassandra()
    cmd = f"UPDATE my_key.tasks SET column_id = \'{dest}\' WHERE id = {task_id};"
    session.execute(cmd)


@app.put("/task/update")
async def create_task(task: Task, current_user: Annotated[User, Depends(get_current_user)]):
    session = get_cassandra()
    session.execute(f'INSERT INTO my_key.tasks JSON \'{task.model_dump_json()}\'')


@app.delete("/task/delete")
async def create_task(task_id, current_user: Annotated[User, Depends(get_current_user)]):
    session = get_cassandra()
    cmd = f"DELETE FROM my_key.tasks WHERE ID={task_id}"
    session.execute(cmd)


@app.get("/tasks")
async def get_tasks(column_id: UUID, current_user: Annotated[User, Depends(get_current_user)]):
    res = []
    query_res = get_cassandra().execute(f'SELECT JSON * FROM my_key.tasks WHERE column_id=\'{column_id}\' ALLOW FILTERING')
    for task in query_res:
        print(task)
        res.append(json.loads(task.json))
    return res


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/auth_debug")
async def root(current_user: Annotated[User, Depends(get_current_user)]):
    return {"message": "Hello World"}


print("setup schema")
session = get_cassandra()
session.execute(
    "CREATE KEYSPACE IF NOT EXISTS my_key WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}")
session.execute(
    '''CREATE TABLE IF NOT EXISTS my_key.users (
        username text,
        passhash text,
        boards list<text>,
        PRIMARY KEY(username)
    )'''
)

session.execute(
    '''CREATE TABLE IF NOT EXISTS my_key.tasks (
        id uuid,
        title text,
        assignee text,
        assigned list<text>,
        column_id text,
        PRIMARY KEY(id)
    )'''
)

session.execute(
    '''CREATE TABLE IF NOT EXISTS my_key.boards (
        id uuid,
        name text,
        members list<text>,
        columns list<uuid>,
        column_id text,
        PRIMARY KEY(id)
    )'''
)

session.execute(
    '''CREATE TABLE IF NOT EXISTS my_key.columns (
        id uuid,
        name text,
        PRIMARY KEY(id)
    )'''
)


# for row in session.execute('''DESCRIBE my_key.users'''): print(row)
# for row in session.execute('''DESCRIBE my_key.tasks'''): print(row)
