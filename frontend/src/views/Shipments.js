import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Typography, IconButton, } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { APIService } from '../helpers/APIService';
import { addShipment } from '../store/actions/Shipment';

// Components
import NameInput from './input/Name';
import WeightInput from './input/Weight';
import CountryInput from './input/Country';
import ColorInput from './input/Color';

const formIndex = {
  name: 0,
  weight: 2,
  color: 5,
  country: 7,
}

export default function Shipments() {
  const dispatch = useDispatch();
  // State
  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState('Please fill all information before submit');
  const [severity, setSeverity] = useState('info')

  // Local new shipping count
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target)
    const shipmentData = {
      name: data.get('name'),
      weight: data.get('weight'),
      color: data.get('color'),
      country: data.get('country'),
    };
    try {
      await dispatch(addShipment(shipmentData));
      setSeverity('success');
      setMessageTitle('Success');
      setMessage('The shipment was successfully created');
    } catch (err) {
      setSeverity('error');
      setMessageTitle('Error');
      console.log(err)
      setMessage(err.toString());
    }   
  }

  return(
      <>
        <Navbar />
        <div className='main'>
          <Typography variant="h5">
            Create a shipment
          </Typography>
          <Stack sx={{ alignItems: 'center' }}>
            <Alert severity={severity}>
              <AlertTitle>{messageTitle}</AlertTitle>
              {message}
            </Alert>
          </Stack>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            >
            <Grid container direction='column' justifyContent='center' alignItems='center' className='shipments_form'>
                <NameInput />
                <WeightInput />
                <ColorInput />
                <CountryInput />
                <IconButton aria-label='Add shipment' color='inherit' type='submit'>
                  <AddBoxIcon className='shipment_add_button' />
                </IconButton>
            </Grid>
          </Box>
        </div>
      </>
  );
}

 //setMessageTitle('This is an error alert');
    //setMessage('Error')
    //setSeverity('error');
    //setMessageTitle('Success');
    //setMessage('This is a success message')
    //setSeverity('success');
    //setMessageTitle('Warning');
    //setMessage('This is a warning message')
    //setSeverity('warning');