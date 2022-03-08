import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Alert } from '@mui/material';

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function WeightInput({ setValidWeight }) {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const maxLength = 10;

  const handleChange = (event) => {
    if (event.target.value.trim() === '') {
      setSeverity('warning')
      setMessage('You cant leave the weight input blank - Please fix');
      return;
    }
    if (weight.toString() === 'NaN') {
      setSeverity('warning')
      setMessage('You cant submit anything other than a valid number - Please fix');
      setValidWeight(false);
    } else if (weight > 200) {
      setSeverity('warning')
      setMessage('You cant submit anything over 200 kg - Please fix');
      setValidWeight(false);
    } else if (weight < 0.2) {
      setSeverity('warning')
      setMessage('You cant submit anything lighter than 0.2 kg - Please fix');
      setValidWeight(false);
    } else {
      setMessage('');
      setSeverity('');
      setValidWeight(true); 
    }
  };

  return (
    <>
      {message.length <= 0 ?
        ''
      :
        <Alert severity={severity}>{message}</Alert>
      }
        <TextField
          label="Weight"
          required
          id="shipment_weight"
          name='weight'
          defaultValue=''
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