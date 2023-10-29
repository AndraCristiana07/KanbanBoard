import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {IconButton, Container, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BoardsList from './BoardsList.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useState} from 'react';
import CreateBoardPopUp from './CreateBoardPopUp.jsx';

export default function BoardsMenu({changeBoard}) {
	const [openCreateBoardModal, setOpenCreateBoardModal] = useState(false);

	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		// if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		// 	return;
		// }
		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<Box
			// sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
			role="presentation">
			<Box>
				<IconButton size="small"
							onClick={toggleDrawer(anchor, false)}
                >
                    <ArrowBackIcon/>
                </IconButton>
				<Button variant="lined"
						onClick={() => {
							setOpenCreateBoardModal(true);
						}}>
					Create New Board
				</Button>
				{openCreateBoardModal && (
					<CreateBoardPopUp closeModal={() => setOpenCreateBoardModal(false)}/>
				)}
			</Box>
			<Divider style={{backgroundColor: "#FF8585"}}/>
			{/*
      <List>
        {['Boards List', ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FormatListBulletedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
			<BoardsList changeBoard={changeBoard}/>


		</Box>
	);

	return (
		<Container>
			<React.Fragment key={'left'}>
				<IconButton onClick={toggleDrawer('left', true)}
                style={{alignItems: "start"}}
				>
					< MenuIcon/>
				</IconButton>
				<Drawer
					style={{color: "#200B0B"}}
					anchor={'left'}
					open={state['left']}
					onClose={toggleDrawer('left', false)}
				>
					{list('left')}
				</Drawer>
			</React.Fragment>
		</Container>
	);
}