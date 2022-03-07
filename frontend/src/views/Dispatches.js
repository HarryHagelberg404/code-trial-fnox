import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Typography } from '@material-ui/core';

import Dispatch from './Dispatch/Dispatch';

export default function Shipments() {
  const sumShipping = 0;

  const dispatches = [
    { id: 1, name: 'hatty', weight: 20, color: 'black', country: 'Sweden'},
    { id: 2, name: 'matty', weight: 15, color: 'blue', country: 'China'},
    { id: 3, name: 'marty', weight: 2, color: 'green', country: 'Brazil'},
    { id: 4, name: 'mike', weight: 11.2, color: 'yellow', country: 'Austrailia'},
    { id: 5, name: 'moe', weight: 13, color: 'red', country: 'Sweden'},
    { id: 6, name: 'max', weight: 34, color: 'purple', country: 'China'},
    { id: 7, name: 'chad', weight: 5, color: 'white', country: 'Brazil'},
    { id: 8, name: 'mitchell', weight: 15, color: 'red', country: 'Austrailia'},
  ];

  const calculateShipping = (dispatches) => {
    let cost = 0
    dispatches.forEach(dispatch => {
      switch(dispatch.country) {
        default:
  
        case 'Sweden':
          cost += dispatch.weight * 1.3;
          break;
        case 'China':
          cost += dispatch.weight * 4;
          break;
        case 'Brazil':
          cost += dispatch.weight * 8.6;
          break;
        case 'Austrailia':
          cost += dispatch.weight * 7.2;
          break;
      }
    });
    return cost.toFixed(2);
  }

  return(
      <>
        <Navbar />
        <div className='main'>
            <div className='dispatches'>
              <div className='dispatches_info'>
                <Typography variant="h5">
                  Outgoing dispatches
                </Typography>
                <Typography variant="h8">
                  Total sum of shipping fees: {calculateShipping(dispatches)} kr
                </Typography>
              </div>
              <Grid container justifyContent='center' spacing={4}>
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