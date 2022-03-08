import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import logo from '../resources/nav_box.jpg';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const shipments = useSelector((state) => state.shipments);

  return (
    <>
      <AppBar position='fixed' className='nav' color='inherit'>
        <Toolbar>
          <Link to='/addboxes' className='nav_link'>
            <Typography variant='h6' className='nav_title' color='inherit'>
            <img src={logo} alt='Box Bros' height='50px' className='nav_image'/>
              Box Bros Inc
            </Typography>
          </Link>
          <div className='nav_grow'/>
          <div className='nav_button'>
            <Link to='/addboxes' className='nav_link'>
              <IconButton aria-label='Add shipment' color='inherit'>
                <AddBoxIcon className='shipment_add_button' />
              </IconButton>
            </Link>
          </div>
          <div className='nav_button'>
            <Link to='/listboxes' className='nav_link'>
              <IconButton aria-label='Show dispatches' color='inherit'>
                <Badge badgeContent={shipments.new} color='secondary'>
                  <LocalShippingIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>     
    </>
  );
}