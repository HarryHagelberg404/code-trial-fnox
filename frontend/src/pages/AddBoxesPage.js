import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/navigation/Navbar';
import { Grid, Typography, IconButton, } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { addBox } from '../store/actions/Boxes';

import NameInput from '../components/input/Name';
import WeightInput from '../components/input/Weight';
import CountryInput from '../components/input/Country';
import ColorInput from '../components/input/Color';

export default function AddBoxesPage() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.boxes.error);

  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState('Please fill in all information before submit');
  const [severity, setSeverity] = useState('info')
  const [validName, setValidName] = useState(false);
  const [validWeight, setValidWeight] = useState(false);
  const [validColor, setValidColor] = useState(true);

  // Local new shipping count
  const validInput = () => {
    if (!validName || !validWeight || !validColor) {
      setSeverity('warning');
      setMessageTitle('Warning');
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
      const response = await dispatch(addBox(shipmentData));
      console.log(response)
      dispatch(response)
      if (error !== null) {
        setSeverity('error');
        setMessageTitle('Error');
        setMessage(
          `Sorry, we unfortunately received a ${error.toLowerCase()}.
          \nThis box will be added once the problem is resolved.`
        );
      }
      else {
        setSeverity('success');
        setMessageTitle('Success');
        setMessage('The box was successfully created');
      }
    } catch (err) {
      setSeverity('error');
      setMessageTitle('Error');
      console.log(err)
      setMessage(err.toString());
    }
  }

  useEffect(() => {
    
  }, [error]);

  return(
      <>
        <Navbar />
        <div className='main'>
          <Typography variant="h5">
            Add a box
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
                <ColorInput setValidColor={setValidColor}/>
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