import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export default function NameInput() {

  return (
    <>
      <TextField
        fullWidth
        required
        sx={{ m: 1, width: '25ch' }}
        id='shipment_name'
        label='Receiver'
        name='name'
        defaultValue='John Doe'
      />
    </>
  );
}