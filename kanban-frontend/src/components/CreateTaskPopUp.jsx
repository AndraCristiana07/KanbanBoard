import {Dialog, DialogActions, Stack, Typography, Box, IconButton, TextField, Button} from "@mui/material";
import PopUpHeader from "./PopUpHeader.jsx";
import {useState} from "react";
import TaskRender from "./TaskRender.jsx";
import Task from "../../gen2/src/model/Task.js";

function CreateTaskPopUp({closeModal, submitNewTask}) {
    const [task, setTask] = useState(new Task("", "", [], []))
    const onTitleChange = (e) => {
        task.title = e.target.value
        setTask(Object.assign({}, task))
    }
    return (
        <Dialog
            open onClose={closeModal} fullWidth maxWidth="xs"
            color="#FFCDB2">
            <Stack color="#B5838D" padding={2}>
                <PopUpHeader onClose={closeModal} title="Create Task"/>
                <Stack marginY={5} spacing={3}>
                    <TextField
                        label="Task Name"
                        value={task.title}
                        onChange={onTitleChange}
                    />
                </Stack>
                <Button onClick={() => {
                    submitNewTask(task)
                }} size="large" style={{backgroundColor: "#804D57"}} variant="contained">
                    Add Task
                </Button>
            </Stack>
        </Dialog>
    );
};

export default CreateTaskPopUp;