import React, { useEffect, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import { IconButton, TableCell, TableHead, Typography } from '@material-ui/core';
import { clearNewBoxes, deleteBox, getBoxes } from '../store/actions/Boxes';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
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
    // TODO: FIX THIS
    // ---
    dispatch(await getBoxes());
    // ---
    // Doesn't work when 'error hasnt been updated'
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
      case 'Sweden':
        cost += box.weight * 1.3;
        break;
      case 'China':
        cost += box.weight * 4;
        break;
      case 'Brazil':
        cost += box.weight * 8.6;
        break;
      case 'Austrailia':
        cost += box.weight * 7.2;
        break;
    }
    sumShippingWeight += box.weight;
    sumShippingCost += cost;
    return cost.toFixed(2);
  }

  useEffect(() => {
    dispatch(clearNewBoxes());    
    fetchboxes()
    // errors in useeffect
  }, [error, boxes]);

  const handleDeleteBox = async (boxId) => {
    // FIx
    const response = await dispatch(deleteBox(boxId));
    dispatch(response);
    if (error !== null) {
      setSeverity('error');
      setMessageTitle('Error');
      setMessage(
        `Sorry, we unfortunately received a ${error.toLowerCase()}.
        \nWe could not delete this dispatch.`
      );
    }
  }

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
                    <TableCell key='del'>Delete</TableCell>
                    {columns.map((col) => {
                      return <TableCell key={col.field}>{col.headerName}</TableCell>
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {boxes.map((box) => {
                    return(
                    <TableRow key={box.id}>
                      <TableCell>
                        <IconButton aria-label='dispatch delete' onClick={() => handleDeleteBox(dispatch.id)} className="dispatch_delete_icon">
                          <DeleteIcon className='dispatch_delete_button'/>
                        </IconButton>
                      </TableCell>
                      <TableCell style={{ lineBreak: 'auto' }}>{dispatch.name}</TableCell>
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
              Total sum of shipping fees: {sumShippingCost} kr
            </Typography>
            <Typography variant="h6">
              Total sum of shipping weight: {sumShippingWeight} kg
            </Typography>
        </div>
      </>
  );
}