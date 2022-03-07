import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const countries = [
  {
    value: 'SWE',
    label: 'Sweden',
  },
  {
    value: 'CHI',
    label: 'China',
  },
  {
    value: 'BRA',
    label: 'Brazil',
  },
  {
    value: 'AUS',
    label: 'Austrailia',
  }
]

export default function CountryInput() {
  const [country, setCountry] = useState('SWE');
  const handleChange = (event) => setCountry(event.target.value);

  return (
    <>
    <Box
      sx={{ m: 1, width: '25ch' }}
    >
      <TextField
        className='shipment_country_input'
        fullWidth
        select
        required
        id='shipment_country'
        label='Destination'
        name='country'
        value={country}
        onChange={handleChange}
        helperText='Please select destination'
      >
        {countries.map((option) => {
          return (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
          );
        })}
      </TextField>
      </Box>
    </>
  );
}