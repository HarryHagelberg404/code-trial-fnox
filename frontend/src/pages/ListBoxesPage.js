import React, { useEffect, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import { TableCell, TableHead, Typography } from '@material-ui/core';
import { clearNewBoxes, getBoxes } from '../store/actions/Boxes';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import { columns } from '../constants/Columns';

export default function ListBoxesPage() {
  const dispatch = useDispatch();
  const boxes = useSelector((state) => state.boxes.booked);
  const error = useSelector((state) => state.boxes.error);
  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState(`
    If an error would occur, your latest data is still available. 
    All actions you proceed with will complete when the error is resolved.`
  );
  const [severity, setSeverity] = useState('info')
  let sumShippingWeight = 0;
  let sumShippingCost = 0;

  

  const fetchboxes = async () => {
    dispatch(await getBoxes());
    if (error !== null) {
      setSeverity('error');
      setMessageTitle('Error');
      setMessage(
        `Sorry, we unfortunately received a ${error.toLowerCase()}.
        \nBeware: You are looking at old data.`
      );
    }
  }

  const calculateShipping = (box) => {
    let cost = 0;
    switch(box.country) {  
      case 'SWE':
        cost += box.weight * 1.3;
        break;
      case 'CHI':
        cost += box.weight * 4;
        break;
      case 'BRA':
        cost += box.weight * 8.6;
        break;
      case 'AUZ':
        cost += box.weight * 7.2;
        break;
    }
    sumShippingWeight += box.weight;
    sumShippingCost += cost;
    return cost.toFixed(2);
  }

  useEffect(() => {
    fetchboxes();
    dispatch(clearNewBoxes());  
    // errors in useeffect
  }, [error]);

  return(
      <>
        <Navbar />
        <div className='main'>
            <div className='boxes'>
              <div className='boxes_info'>
                <Stack sx={{ alignItems: 'center' }}>
                  <Alert severity={severity}>
                    <AlertTitle>{messageTitle}</AlertTitle>
                    {message}
                  </Alert>
                </Stack>
              </div>
              <div style={{ width: '100%',}}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((col) => {
                      return <TableCell key={col.field}>{col.headerName}</TableCell>
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {boxes.map((box) => {
                    return(
                    <TableRow key={box.id}>
                      <TableCell style={{ lineBreak: 'auto' }}>{box.name}</TableCell>
                      <TableCell>{box.weight} kg</TableCell>
                      <TableCell
                        style={{
                            backgroundColor: `rgb(${box.color})`,
                            height: '100%',
                        }}
                      ></TableCell>
                      <TableCell>{calculateShipping(box)} kr</TableCell>
                    </TableRow>)
                  })}
                </TableBody>
              </Table>
              </div>
            </div>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Total sum of shipping fees: {sumShippingCost.toFixed(2)} kr
            </Typography>
            <Typography variant="h6">
              Total sum of shipping weight: {sumShippingWeight} kg
            </Typography>
        </div>
      </>
  );
}