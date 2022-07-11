import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {useState,useEffect} from 'react';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import { padding } from '@mui/system';
import "./App.css";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#' : '#',
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'left',
  color: '#'
}));



export default function BasicStack(props) {
  const persjes = JSON.parse(localStorage.getItem('data') || "[]"); 
  console.log("Lista Almacenda:",persjes);
 
             
  const Item1 = (id) => {
    const pers1= persjes.find(pers => pers.id === id )
    console.log(pers1);
    
    return(
      <div id= "hola">Hola</div>
    )
  }
 

             
  return (
    <div>
       <Box sx={{ width: '100%' }}>
      <Stack onClick={()=>Item1(props.pers.id)}spacing={2} >
        <Item 
        id="item" className="listaitems"><b>{props.pers.name}</b> <br></br>{props.pers.id}</Item>
      </Stack>
    </Box>       
    <div  id="Hola">
      
      </div> 
    </div>
   
   
    
  );} 
