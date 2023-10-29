import styled from "styled-components";
import { AppBar, Toolbar,Button, Card, Container, TextField, Stack, Typography, OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import theme from "../theme.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import {ApiClient, DefaultApi, SignUpForm} from "../../gen/src/index.js";
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

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
    };
   

    const onUsernameChange = (e) => { setUsername(e.target.value) }
    const onPassword1Change = (e) => { setPassword1(e.target.value) }
    const onPassword2Change = (e) => { setPassword2(e.target.value) }

    const onSignup = () => {
        if (password1 !== password2) {
            // TOOD
        } else {
            new DefaultApi(new ApiClient()).signupSignupPost(new SignUpForm(username, password1), (error, data, response) => {
                console.log(error)
                console.log(data)
                console.log(response)
                if (error == null && response.status === 200) {
                    navigate("/")
                }
            })
        }
    }

    const navigate = useNavigate();

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
            // mb={2}
            
            spacing={4}
           >
            
            <Typography
              color="#804D57" padding={2}> Please enter your details below</Typography>
          </Stack>

            
            <Stack spacing={2} 
            m={6}
            
            >
                <div
                style= {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <ValidationTextField
                    fullWidth
                    required
                    label="Username"
                    name="username"
                    value={username}
                    onChange={onUsernameChange}
                />
                </div>
                {/* <Stack direction="row"> */}
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
                        value={password1}
                        onChange={onPassword1Change}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton><VisibilityIcon onClick={toggleVisibility}/></IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    </div>

                {/* </Stack> */}
                <div
                style= {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ValidationTextField
                        fullWidth
                        required
                        label="Confirm password"
                        name="confirm password"
                        type={visible? "text" : "password"}
                        value={password1}
                        onChange={onPassword1Change}
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
                    <Button variant="contained" color="secondary" 
                    style={{width:"200px", backgroundColor:"#804D57"}}
                    onClick={onSignup}>Register</Button>
                </Stack>
            </Stack>
            </Card>
        </Container>
    )
}