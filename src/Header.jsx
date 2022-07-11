import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import './App.css';

const Header = () => {
  return(
    <Box className='header'>
      <AppBar  position="static">
        <Toolbar className='header' >
            <img className="img2" src="https://i.pinimg.com/originals/5a/d2/38/5ad2386644bc823ef4a05e17e7c374db.jpg">
            </img>
            <div>
              <h1 className='h3'>SuperHero</h1>
              <p className='h4'>Random your Favorite Hero</p>
             
            </div>
            
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;