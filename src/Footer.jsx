import * as React from 'react';
import Box from '@mui/material/Box';


export default function Footer() {
  return (
    <footer className='footer'>
      <Box
        backgroundColor="black"
        color="white"
        height="100%"
    
        >
        <Box textAlign="center" padding="30px" >
            <img className="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"></img>
        </Box>

     <Box textAlign="center" padding="0px" >
            Super Hero Api By Jp &reg; {new Date().getFullYear()}
          </Box>
      </Box>
    </footer>
  );
}