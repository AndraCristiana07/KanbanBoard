import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {useEffect, useState} from "react";
import {ApiClient, Board, DefaultApi} from "../../gen/src/index.js";


export default function BoardsList({changeBoard}) {
    const [open, setOpen] = React.useState(true);

    const [boards, setBoards] = useState([])

    useEffect(() => {
        const client = new ApiClient()
        client.authentications["OAuth2PasswordBearer"].accessToken = sessionStorage["access_token"]
        new DefaultApi(client).getBoardlistBoardlistGet((error, data, response) => {
            // console.log(error)
            console.log(data)
            // console.log(response)
            if (error == null && response.status === 200) {
                const ndata = data.map(value => {
                        return {
                            id: value.id,
                            name: value.name
                        }
                    })
                setBoards(ndata)
            }
        })
    }, []);


    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Boards List"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        boards.map(value => {
                            return (
                                <ListItemButton key={value.id} sx={{pl: 4}}
                                    onClick={() => {
                                        changeBoard(value.id)
                                    }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={value.name}/>
                                </ListItemButton>
                            )
                        })
                    }
                </List>
            </Collapse>
        </List>
    );
}