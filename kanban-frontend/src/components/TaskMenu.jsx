import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

export default function TaskMenu({ open, onClose }) {
	const anchor = 'right';

	return (
		<Drawer
			anchor={anchor}
			open={open}
			onClose={onClose}
		>
			<Box sx={{ width: 250 }}>
				<Typography>Content</Typography>
			</Box>
		</Drawer>
	);
}
