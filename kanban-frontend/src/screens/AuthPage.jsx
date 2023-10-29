import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import {  AppBar, Toolbar, Button, Card, Container, InputAdornment, TextField, Stack, Typography, OutlinedInput, IconButton } from "@mui/material";
import { useState } from "react";
import theme from "../theme.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import {ApiClient, DefaultApi} from "../../gen/src/index.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'

// const TextContent = styled.div``;

// const initForm = {
//     email: "",
//     password: "",
//   };

//   const handleChange = (event) =>
//     setForm((oldForm) => ({
//       ...oldForm,
//       [event.target.name]: event.target.value,
//     }));

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', 
    },
});

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
    };

//     const authText = isLogin
//     ? "Do not have an account?"
//     : "Already have an account?";
    const navigate = useNavigate();

    const onLogin = () => {
        // new DefaultApi(new ApiClient()).rootGet((error, data, response) => {
        //     console.log(error)
        //     console.log(data)
        //     console.log(response)
        // })
        new DefaultApi(new ApiClient()).loginTokenPost(username, password, {}, (error, data, response) => {
            if (error == null) {
                sessionStorage.setItem("access_token", response.body.access_token)
                navigate("/board")
            }
        })
    }

    const goToSignUpPage = () => {

    }


    return(
        <Container>
            <AppBar  style={{backgroundColor:"#804D57"}}>
                <Toolbar
                    style={{display:"flex", justifyContent:"end"}}
                >
                    <AccountCircleIcon
                        style={{color:"#FFCDB2", }}/>
                </Toolbar>
            </AppBar>
            <Card variant="outlined"
                  back
                  sx={{
                      mt: 20,
                      ml:20,
                      mr:20
                  }}
                  style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: "#FFCEC2"
                  }}
            >
                <Stack

                    spacing={4}
                >

                    <Typography
                        color="#804D57" padding={2}> Welcome to our Boards</Typography>
                </Stack>


                <Stack spacing={2}
                       m={6}

                >

                  
                    <ValidationTextField
                        fullWidth
                        required
                        label="Username"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}
                        name="username"/>
                    <div
                        style= {{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ValidationTextField
                            fullWidth
                            required
                            label="Password"
                            name="password"
                            type={visible? "text" : "password"}
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton><VisibilityIcon onClick={toggleVisibility}/></IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                    </div>
                    
                    <Stack
                        style={{
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                        <Button variant="contained"
                                style={{width:"200px", backgroundColor:"#804D57"}}
                                onClick={onLogin}>
                            Login
                        </Button>
                        <Button variant="text"
                                style={{ color:"#804D57"}}
                                onClick={() => navigate("/register")}>
                            Do not have an account? Register!
                        </Button>
                    </Stack>
                </Stack>
            </Card>
        </Container>
    )
}