import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
    const logOut = async () => {
        signOut(auth);
    }

 return (
    <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VGMQ
            </Typography>
            <Button color="inherit" onClick={logOut}>Log Out</Button>
        </Toolbar>
    </AppBar>
 );
};

export default NavBar;