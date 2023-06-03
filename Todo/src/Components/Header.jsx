import React, { useState } from 'react';
import { Switch } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


function Header({theme, icon }) {
  
 

  return (
    <>
    <header>
    <h1>Todo</h1>
    <button onClick={theme} className='theme-toggle'>
      <img src={icon} alt="" />
    </button>


    </header>
    
    
    </>
  )
}

export default Header