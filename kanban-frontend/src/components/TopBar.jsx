import {AppBar, Toolbar, Button, Stack, Icon, IconButton} from "@mui/material";
import BoardsMenu from "./BoardsMenu.jsx";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

function TopBar({changeBoard}) {

    const navigate = useNavigate();

    return (
        <AppBar position="static" style={{ width:"100%"}}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                }}
                style={{backgroundColor: "#804D57"}}
            >
                <BoardsMenu changeBoard={changeBoard}/>
                <Stack direction="row" spacing={2}>
                    <IconButton
                        onClick={() => {
                            sessionStorage.getItem("access_token")
                            navigate("/")
                        }}>
                        <LogoutIcon/>
                    </IconButton>
                </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default TopBar;