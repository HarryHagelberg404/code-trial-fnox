import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function WeightInput() {
  const [weight, setWeight] = useState(0);

  const handleChange = (prop) => (event) => {
    setWeight(event.target.value);
  };

  return (
    <>
        <TextField
          label="Weight"
          required
          id="shipment_weight"
          name='weight'
          value={weight}
          onChange={handleChange('weight')}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
    </>
  );
}