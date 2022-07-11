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
            <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png">
            </img>
            <div className='juntar'>
              <h1 className='h3'>SUPER-HEROES JP</h1>
              <p className='h4'>Random your Favorite Hero</p>
            </div>
            <div className='juntar1'>
              <img className="img5" src="https://i.pinimg.com/originals/c4/8e/c8/c48ec805ab6adb7738c5551bea137939.jpg">  
              </img>
              <img className="img5" src="https://i.pinimg.com/736x/31/44/08/31440830ffc5d2cec25cfe51cf4bfcd8.jpg">  
              </img>
              <img className="img5" src="https://m.media-amazon.com/images/I/41lcOUFF9iL._AC_SY450_.jpg">  
              </img>
              <img className="img5"src="https://m.media-amazon.com/images/I/610JRahmLeL._AC_SS450_.jpg">  
              </img>
            </div>
            
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;