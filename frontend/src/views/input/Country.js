import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select'
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

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