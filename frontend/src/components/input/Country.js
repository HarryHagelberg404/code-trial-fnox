import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { countries } from '../../constants/Countries'

export default function CountryInput() {
  const [country, setCountry] = useState('Sweden');
  const handleChange = (event) => setCountry(event.target.value);

  return (
    <>
    <Box
      sx={{ m: 1, width: '25ch' }}
    >
      <TextField
        className='box_country_input'
        fullWidth
        select
        required
        id='box_country'
        label='Destination'
        name='country'
        value={country}
        onChange={handleChange}
        helperText='Please select destination'
      >
        {countries.map((option) => {
          return (
          <MenuItem key={option.value} value={option.label} >
            {option.label}
          </MenuItem>
          );
        })}
      </TextField>
      </Box>
    </>
  );
}