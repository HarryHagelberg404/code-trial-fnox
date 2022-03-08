import React, { useEffect, useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Typography } from '@material-ui/core';
import { clearNewShipments, deleteShipment, getShipments } from '../store/actions/Shipment';
import Dispatch from './Dispatch/Dispatch';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Shipments() {
  const dispatch = useDispatch();
  const dispatches = useSelector((state) => state.shipments.booked);
  const error = useSelector((state) => state.shipments.error);
  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState(`
    If an error would occur, your latest data is still available. 
    All actions you proceed with will complete when the error is resolved.`
  );
  const [severity, setSeverity] = useState('info')

  //dispatch(clearNewShipments());

  const fetchDispatches = async () => {
    // TODO: FIX THIS
    // ---
    dispatch(await getShipments());
    // ---
    // Doesn't work when 'error hasnt been updated'
    if (error !== null) {
      setSeverity('error');
      setMessageTitle('Error');
      setMessage(
        `Sorry, we unfortunately received a ${error.toLowerCase()}.
        \nBeware: You are looking at old data.`
      );
    }
  }

  useEffect(() => {
    dispatch(clearNewShipments());    
    fetchDispatches()
  }, []);

  const calculateShipping = (dispatches) => {
    let cost = 0
    dispatches.forEach(dispatch => {
      switch(dispatch.country) {  
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

  const handleDeleteDispatch = async (dispatchId) => {
    const response = await dispatch(deleteShipment(dispatchId));
    dispatch(response);
    if (error !== null) {
      setSeverity('error');
      setMessageTitle('Error');
      setMessage(
        `Sorry, we unfortunately received a ${error.toLowerCase()}.
        \nWe could not delete this dispatch.`
      );
    }
  }

  return(
      <>
        <Navbar />
        <div className='main'>
            <div className='dispatches'>
              <div className='dispatches_info'>
                <Stack sx={{ alignItems: 'center' }}>
                  <Typography variant="h5">
                    Outgoing dispatches
                  </Typography>
                  <Typography variant="h6">
                    Total sum of shipping fees: {calculateShipping(dispatches)} kr
                  </Typography>
                  <Alert severity={severity}>
                    <AlertTitle>{messageTitle}</AlertTitle>
                    {message}
                  </Alert>
                </Stack>
              </div>
              <Grid container justifyContent='center' spacing={4}>
                {dispatches.map((dispatch) => (
                  <Grid item key={dispatch.id} xs={12} sm={6} md={4} lg={3}>
                    <Dispatch dispatch={dispatch} onDeleteDispatch={handleDeleteDispatch}/>
                  </Grid>
                ))}
              </Grid>
            </div>
        </div>
      </>
  );
}