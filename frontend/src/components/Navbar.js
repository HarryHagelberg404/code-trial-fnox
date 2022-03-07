import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { Link } from 'react-router-dom';
// Logged in?

import logo from '../resources/nav_box.jpg';

export default function Navbar() {
  return (
    <>
      <AppBar position='fixed' className='nav' color='inherit'>
        <Toolbar>
          <Link to='/' className='nav_link'>
            <Typography variant='h6' className='nav_title' color='inherit'>
            <img src={logo} alt='Box Bros' height='50px' className='nav_image'/>
              Box Bros Inc
            </Typography>
          </Link>
          <div className='nav_grow'/>
          <div className='nav_button'>
            <IconButton aria-label='Show dispatches' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <LocalShippingIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
    </>
  );
}

/*
<div className='nav'>
        <div className='nav_header'>
          <div className='nav_box_div'>
            <Link to='/'>
              <img src={require('../resources/nav_box.jpg')} className='nav_box_image' />
            </Link>
          </div>
          <div className='nav_box_counter_div'>
            <h1>Icon</h1>
            <h1>Icon</h1>
          </div>
        </div>
        <div className='nav_links'>
          <Link to='/' className='nav_link'>Home</Link>
          <Link to='/shipments' className='nav_link'>Shipments</Link>
          <Link to='/dispatches' className='nav_link'>Dispatches</Link>
        </div>
      </div>
*/