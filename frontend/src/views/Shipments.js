import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Typography, IconButton, } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';


// Components
import NameInput from './input/Name';
import WeightInput from './input/Weight';
import CountryInput from './input/Country';
import ColorInput from './input/Color';

export default function Shipments() {
  const dispatch = useDispatch();
  // State
  const shipment = useSelector((state) => state.shipment)
  const [isValid, setIsValid] = useState(false);
  const [response, setResponse] = useState("");

  // Local new shipping count
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    /*
    if (!isValid) {
      setResponse("Invalid")
    }
    */
  }

  const handlePOST = () => {

  }

  return(
      <>
        <Navbar />
        <div className='main'>
            <Typography variant="h5">
              Create a shipment
            </Typography>
            {response.length > 0 ? (
              <p className="input-view-respMessage">{response}</p>
            ) : (
              ""
            )}
            {isValid ? (
              <p>Please fill in entire form before submiting</p>
            ) : (
              ""
            )}
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' justifyContent='center' alignItems='center' className='shipments_form'>
              <Grid item>
                <NameInput />
              </Grid>
              <Grid item>
                <WeightInput />
              </Grid>
              <Grid item>
                <ColorInput />
              </Grid>
              <Grid item>
                <CountryInput />
              </Grid>
              <Grid item>
                <IconButton aria-label='Add shipment' color='inherit' type='submit'>
                  <AddBoxIcon  />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </div>
      </>
  );
}