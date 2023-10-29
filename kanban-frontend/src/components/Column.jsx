import React from "react";
import styled from "styled-components";
import TaskRender from "./TaskRender.jsx";
import {Droppable} from "react-beautiful-dnd";
import {IconButton, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/AddCircle';
import CreateTaskPopUp from "./CreateTaskPopUp.jsx";
import {useState} from 'react';
import {ApiClient, DefaultApi, Task} from "../../gen2/src/index.js";
import TaskMenu from "./TaskMenu.jsx";

const Container = styled.div`
  background-color: #FFCEC2;
  border-radius: 2.5px;
  position: relative;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
  height: 100%;
`;

const Placeholder = styled.div`
  height: 100px;
  background-color: transparent;
`;


export default function Column({title, tasks, id, color, setColumn}) {
	const [openModal, setOpenModal] = useState(false);



	 const [openDrawer, setOpenDrawer] = useState(false);
	const submitTask = async (task) => {
		const client = new ApiClient()
		client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
		task.column_id = id
		await new DefaultApi(client).createTaskTaskUpdatePut(task).then(value => {
			console.log(title)
		})
		await new DefaultApi(client).getTasksTasksGet(id).then(value => {
				console.log(title, value)
				setColumn({
					name: title,
					id: id,
					tasks: value
				})
			}
		)
	}

	// const openTaskDrawer = (anchor, open) => (event) => {
	//
	// 	setState({...state, [anchor]: open});
	// };
	return (
		<Container
			style={{
				borderRadius: "25px",
			}}>
			<Droppable droppableId={id}>
				{(provided) => (

					<Stack
						style={{
							borderRadius: "25px",
							width: "300px",
							height: "675px"
						}}>
						{openDrawer && <TaskMenu
							closeDrawer={() => setOpenDrawer(false)}/>}
						{openModal && <CreateTaskPopUp
							closeModal={() => setOpenModal(false)}
							submitNewTask={async (task) => {
								setOpenModal(false)
								submitTask(task)
							}}
						/>}
						<Stack direction="row" alignContent="center" justifyContent="center"
							sx={{mb: 2}}
							style={{
								backgroundColor: "#E5989B",
								position: "sticky",
								borderTopLeftRadius: "25px",
								borderTopRightRadius: "25px",
							}}>

							<Title>

								{title}
							</Title>
							<IconButton disableFocusRipple={true} disableRipple={true}
										onClick={() => {
											setOpenModal(true)
										}}>
								<AddIcon/>
							</IconButton>
						</Stack>


						{/* {tasks.length > 0 ? ( */}
						<TaskList
							ref={provided.innerRef}
							{...provided.droppableProps}
						>

							{
								tasks.map((task) => {
									return <TaskRender key={task.id}
													   title={task.title}
													   id={task.id}
													   index={tasks.indexOf(task)}
													   // openTaskDrawer={openTaskDrawer}
									/>
								})
							}
							{provided.placeholder}

						</TaskList>
						{/* ) : (<Placeholder/>)} */}

					</Stack>
				)}
			</Droppable>
		</Container>
	);
}