import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from '@mui/material/Switch';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useNavigate } from "react-router-dom";
const MyPage = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button sx={{color:"red", bgcolor:"blue"}}>Contained</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    
  );
};

export default MyPage;