import {Dialog, Stack, TextField, Button} from "@mui/material";
import PopUpHeader
    from "./PopUpHeader.jsx";
import {ApiClient, DefaultApi, Board} from "../../gen/src/index.js";
import {useState} from "react";

function CreateBoardPopUp({closeModal}) {
    const [boardname, setBoardname] = useState("")
    return (
        <Dialog
            open onClose={closeModal} fullWidth maxWidth="xs"
            color="#FFCDB2">
            <Stack color="#B5838D" p={2}>
                <PopUpHeader onClose={closeModal} title="Create Board"/>
                <Stack my={5} spacing={3}>
                    <TextField
                        label="Board Name"
                        value={boardname}
                        onChange={(e) => {
                            setBoardname(e.target.value)
                        }}
                    />
                </Stack>
                <Button onClick={() => {
                    const client = new ApiClient()
                    client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
                    new DefaultApi(client).createBoardBoardUpdatePut(new Board(boardname, [], []), (error, data, response) => {
                        console.log(error)
                        console.log(data)
                        console.log(response)
                        if (error == null && response.status === 200) {
                            // TODO update table list
                        }
                    })
                    closeModal()
                }} size="large" style={{backgroundColor: "#804D57"}} variant="contained">Create</Button>

            </Stack>
        </Dialog>
    );
};

export default CreateBoardPopUp;