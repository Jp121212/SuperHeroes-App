import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { padding } from '@mui/system';
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#' : '#',
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'left',
  color: '#',
}));

export default function BasicStack(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} >
        <Item id="item" className="listaitems"><b>{props.pers.name}</b> <br></br>{props.pers.id}</Item>
      </Stack>
    </Box>
  );
}