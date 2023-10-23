import * as React from 'react';
import { Button } from "@mui/material";
import CreateLobbyModal from '../../component/createLobbyModal';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const NavigateToLobby = (lobbyID) => {
    setOpen(false);
    //navigate("/lobby/" + lobbyID);
  };

  return (
    <div className="HomePage">
      <p>Home</p>
      <Button variant="contained" onClick={handleOpen}>Create Room</Button>
      <Button variant="contained">Join Room</Button>
      <CreateLobbyModal open={open} handleClose={handleClose} NavigateToLobby={NavigateToLobby}></CreateLobbyModal>
    </div>
  );
}

export default HomePage;
