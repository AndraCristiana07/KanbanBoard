import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import FaceIcon from "@mui/icons-material/Face";
import InfoIcon from "@mui/icons-material/Info";
import TaskMenu from "./TaskMenu.jsx";
import React, {useState} from "react";

export default function TaskRender({ title, index, color, id }) {
    const  [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <Container>
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                    <Stack
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        direction="column"
                    >
                        <Stack
                            direction="row"
                            style={{
                                backgroundColor: "#B5838D",
                                position: "stick",
                                borderRadius: "25px",
                            }}
                        >
                            <IconButton>
                                <FaceIcon />
                            </IconButton>
                            <Typography justifyContent="center" alignContent="center">
                                name
                            </Typography>
                            <Typography justifyContent="center" alignContent="center">
                                {title}
                            </Typography>
                            <IconButton onClick={openDrawer}
                                // onClick={() => toggleDrawer(true)}
                            >
                                <InfoIcon />
                            </IconButton>
                            {isDrawerOpen && <TaskMenu />}
                            {/*{isDrawerOpen && <TaskMenu onClose={closeDrawer} />}*/}
                        </Stack>
                    </Stack>
                )}
            </Draggable>
        </Container>
    );
}
