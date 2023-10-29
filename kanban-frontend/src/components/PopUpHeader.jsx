import {Dialog, DialogActions, Stack, Typography, Box, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function PopUpHeader({title, onClose}) {

    return (

        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
                {title}</Typography>
            <IconButton size="small"
                        onClick={onClose}
            ><CloseIcon/></IconButton>
        </Stack>


    );
};

export default PopUpHeader;