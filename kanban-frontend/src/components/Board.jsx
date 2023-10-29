import React, {useEffect, useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import Column from "./Column.jsx";
import TopBar from "./TopBar.jsx";
import {ApiClient, Board, DefaultApi} from "../../gen2/src/index.js";
import TaskMenu from "./TaskMenu.jsx";

export default function BoardRender() {
	const [board, setBoard] = useState(new Board("", [], []))
	const [columns, setColumns] = useState([])
	// const [isTaskDrawerOpen, setIsTaskDrawerOpen] = useState(false);
	//
	// const openTaskDrawer = () => {
	// 	setIsTaskDrawerOpen(true);
	// };
	//
	// const closeTaskDrawer = () => {
	// 	setIsTaskDrawerOpen(false);
	// };

	useEffect(() => {
		const client = new ApiClient()
		client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
		new DefaultApi(client).getBoardlistBoardlistGet().then(data => {
				if (data.length) {
					const shown_board_id = sessionStorage.getItem("shown_board_id")
					if (shown_board_id === null) {
						setBoard(data[0])
					} else {
						const board_ = data.filter(value => value.id === shown_board_id)[0]
						sessionStorage.setItem("shown_board_id", board_.id)
						setBoard(board_)
					}
				}
			}
		)
	}, []);

	useEffect(() => {
		const f = async () => {
			const columns = []
			for (const idx in board.columns) {
				const col_id = board.columns[idx]

				const column = {
					name: "",
					id: col_id,
					tasks: []
				};

				const client = new ApiClient()
				client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]

				await new DefaultApi(client).getColumnColumnGet(col_id).then(
					value => {
						column.name = value.name
					}
				)

				await new DefaultApi(client).getTasksTasksGet(col_id).then(data => {
					column.tasks = data
				})

				columns.push(column)
			}
			setColumns(columns)
		}
		f().then(() => {})
	}, [board]);

	function handleOnDragEnd(result) {
		const {source, destination, draggableId} = result;

		if (!destination) return; // outside droppable area

		const col_src = columns.find((col) => col.id === source.droppableId)
		const col_dst = columns.find((col) => col.id === destination.droppableId)
		const task = col_src.tasks.find((item) => item.id === draggableId)

		task.column_id = col_dst.id

		col_src.tasks.splice(col_src.tasks.indexOf(task), 1)
		col_dst.tasks.splice(destination.index, 0, task)

		if (col_src !== col_dst) {
			const client = new ApiClient()
			client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
			new DefaultApi(client).moveTaskTaskMovePost(task.id, col_dst.id)
		}


	}

	const changeBoard = (board_id) => {
		const client = new ApiClient()
		client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
		sessionStorage.setItem("shown_board_id", board_id)
		setColumns([])
		new DefaultApi(client).getBoardBoardGet(board_id).then(data => {
			setBoard(data)
		})
	}


	return (
		<>
			<div>
				<TopBar changeBoard={changeBoard}/>
			</div>
			<DragDropContext
				onDragEnd={handleOnDragEnd}
			>
				<h2 style={{textAlign: "center"}}> {board.name} </h2>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						alignContent: "center",
						flexDirection: "row",
						margin: "50px"
					}}
				>
					{
						columns.map((col) => {
							return <Column title={col.name} tasks={col.tasks} key={col.id} id={col.id}
									setColumn={(column) => {
										columns[columns.indexOf(col)] = column
										setColumns(Object.assign([], columns))

									}}
									// openTaskDrawer={openTaskDrawer}
							/>
						})
					}
				</div>
			</DragDropContext>
			{/*{isTaskDrawerOpen && <TaskMenu onClose={closeTaskDrawer} />}*/}
		</>
	)
}