import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';

export default function NameInput({ setValidName }) {
  const [message, setMessage] = useState('');
  const maxLength = 20;

  const handleChange = (event) => {
    const input = event.target.value.trim();
    if (input === '') {
      setMessage('You cant submit a blank receiver - Please fix');
      setValidName(false);
    } else {
      setMessage('');
      setValidName(true);
    }
  }
  return (
    <>
      {message.length <= 0 ?
        ''
      :
        <Alert severity='warning'>{message}</Alert>
      }
      <TextField
        fullWidth
        required
        sx={{ m: 1, width: '25ch' }}
        id='shipment_name'
        label='Receiver'
        name='name'
        inputProps={{maxLength: maxLength}}
        defaultValue=''
        onChange={handleChange}
      />
    </>
  );
}