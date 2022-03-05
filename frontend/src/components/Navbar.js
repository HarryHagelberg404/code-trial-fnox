import React from 'react';
import { Link } from 'react-router-dom';
// Logged in?

export default function Navbar() {
  return (
    <>
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
    </>
  );
}