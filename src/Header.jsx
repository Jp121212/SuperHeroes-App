import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Data from './App';

import './App.css';

const Header = () => {
  return(
    <Box className='header'>
      <AppBar  position="static">
        <Toolbar className='header' >
            <p className='header'>Mi Super Hero App</p>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;