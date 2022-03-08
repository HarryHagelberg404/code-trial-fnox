import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { Grid, Typography, IconButton, } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { addShipment } from '../store/actions/Shipment';

// Components
import NameInput from './input/Name';
import WeightInput from './input/Weight';
import CountryInput from './input/Country';
import ColorInput from './input/Color';

export default function Shipments() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.shipments.error);
  const input = useSelector((state) => state.input)
  // State
  //const [buttonLock, setButtonLock] = useState(true);
  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState('Please fill in all information before submit');
  const [severity, setSeverity] = useState('info')
  const [validName, setValidName] = useState(false);
  const [validWeight, setValidWeight] = useState(false);
  const [validColor, setValidColor] = useState(false);

  // Local new shipping count
  const validInput = () => {
    console.log(validName, validWeight)
    if (!validName || !validWeight) {
      //setButtonLock(false);
      setSeverity('error');
      setMessageTitle('Error');
      setMessage(
        `Sorry, seems that you have information to correct or forgot to fill in.
        \nPlease correct and try again.`
      );
      return false
    }
    return true;
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validInput()) {
      return;
    } 
    const data = new FormData(event.target)
    const shipmentData = {
      name: data.get('name').trim(),
      weight: Number(data.get('weight')),
      color: data.get('color'),
      country: data.get('country'),
    };
    try {
      // fix
      const response = await dispatch(addShipment(shipmentData));
      console.log(response)
      dispatch(response)
      console.log(error)
      if (error !== null) {
        setSeverity('error');
        setMessageTitle('Error');
        setMessage(
          `Sorry, we unfortunately received a ${error.toLowerCase()}.
          \nThis shipment will be added once the problem is resolved.`
        );
      }
      else {
        setSeverity('success');
        setMessageTitle('Success');
        setMessage('The shipment was successfully created');
      }
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
                <NameInput setValidName={setValidName}/>
                <WeightInput setValidWeight={setValidWeight} />
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