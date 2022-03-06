import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Typography } from '@material-ui/core';

import Dispatch from './Dispatch/Dispatch';

export default function Shipments() {

  const dispatches = [
    { id: 1, name: 'hatty', weight: 20, color: 'black', country: 'Sweden'},
    { id: 2, name: 'matty', weight: 15, color: 'blue', country: 'Denmark'},
    { id: 3, name: 'marty', weight: 2, color: 'green', country: 'Turkey'},
    { id: 4, name: 'mike', weight: 11.2, color: 'yellow', country: 'Spain'},
    { id: 5, name: 'moe', weight: 13, color: 'red', country: 'Algeria'},
    { id: 6, name: 'max', weight: 34, color: 'purple', country: 'Norway'},
    { id: 7, name: 'chad', weight: 5, color: 'white', country: 'Canada'},
    { id: 8, name: 'mitchell', weight: 15, color: 'red', country: 'USA'},
  ];

  const calculateShipping = () => {
    let total = 0
    dispatches.forEach((dispatch) => {
      total += dispatch.weight;
    })
    return total
  }

  return(
      <>
        <Navbar />
        <div className='main'>
            <div className='dispatches'>
              <div>
                <Typography variant="h5">
                  Outgoing dispatches
                </Typography>
                <Typography variant="h8" gutterBottom>
                  Total sum of shipping fees: {calculateShipping()} kr
                </Typography>
              </div>
              <Grid container justify='center' spacing={4}>
                {dispatches.map((dispatch) => (
                  <Grid item key={dispatch.id} xs={12} sm={6} md={4} lg={3}>
                    <Dispatch dispatch={dispatch} />
                  </Grid>
                ))}
              </Grid>
            </div>
        </div>
      </>
  );
}