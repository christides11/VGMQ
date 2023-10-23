import * as React from 'react';
import { Modal, TextField, ToggleButton, Slider, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

function CreateLobbyModal({open, handleClose, NavigateToLobby}){
    const [selected, setSelected] = React.useState(false);

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="CreateLobbyModal">
            <Box sx={{ ...style, width: 200 }}>
                <TextField id="lobby-name" label="Lobby Name"/>
                <Typography>
                    Private Lobby
                </Typography>
                <ToggleButton
                 value="check"
                 selected={selected}
                 onChange={() => {
                    setSelected(!selected);
                 }}>

                </ToggleButton>
                <Typography>
                    Number of Players
                </Typography>
                <Slider
                 defaultValue={10}
                 min={1}
                 max={10}
                 aria-label="Small"
                 valueLabelDisplay="auto"/>
                <Typography>
                    Number of Songs
                </Typography>
                <Slider
                 defaultValue={20}
                 min={5}
                 max={100}
                 aria-label="Small"
                 valueLabelDisplay="auto"/>
                <Button onClick={handleClose}>Exit</Button>
                <Button onClick={() => NavigateToLobby('1234')}>Host</Button>
            </Box>
        </Modal>
    );
}

export default CreateLobbyModal;