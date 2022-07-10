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
          < Typography>
            <div className='header'>Mi Super Hero App</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;