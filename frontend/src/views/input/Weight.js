import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Alert } from '@mui/material';

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function WeightInput({ setValidWeight }) {
  const [value, setValue] = useState(''); 
  const [message, setMessage] = useState('');
  const maxLength = 10;

  const handleChange = (event) => {
    const weight = Number(event.target.value)
    if (event.target.value.trim() === '') {
      setMessage('You cant leave the weight input blank - Please fix');
      //return;
    } else if (weight.toString() === 'NaN') {
      setMessage('You cant submit anything other than a valid number - Please fix');
      setValidWeight(false);
    } else if (weight < 0) {
      setMessage('You cant submit a negative value - Please fix');
      setValidWeight(false);
      setValue(0);
      return;
    } else if (weight > 200) {
      setMessage('You cant submit anything over 200 kg - Please fix');
      setValidWeight(false);
    } else if (weight < 0.5) {
      setMessage('You cant submit anything lighter than 0.5 kg - Please fix');
      setValidWeight(false);
    } else {
      setMessage('');
      setValidWeight(true); 
    }
    setValue(event.target.value);
  };

  return (
    <>
      {message.length <= 0 ?
        ''
      :
        <Alert severity='warning'>{message}</Alert>
      }
        <TextField
          label="Weight"
          required
          id="shipment_weight"
          name='weight'
          value={value}
          onChange={handleChange}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            maxLength: maxLength,
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
    </>
  );
}