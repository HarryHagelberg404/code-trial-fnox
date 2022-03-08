import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { IconButton, TableCell, TableHead, Typography } from '@material-ui/core';
import { clearNewShipments, deleteShipment, getShipments } from '../store/actions/Shipment';
//import Dispatch from './Dispatch/Dispatch';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

export default function Shipments() {
  const dispatch = useDispatch();
  const dispatches = useSelector((state) => state.shipments.booked);
  const error = useSelector((state) => state.shipments.error);
  const [messageTitle, setMessageTitle] = useState('Info');
  const [message, setMessage] = useState(`
    If an error would occur, your latest data is still available. 
    All actions you proceed with will complete when the error is resolved.`
  );
  const [severity, setSeverity] = useState('info')
  let sumShippingWeight = 0;
  let sumShippingCost = 0;

  const columns = [
    { field: 'receiver', headerName: 'Receiver' },
    { field: 'weight', headerName: 'Weight' },
    { field: 'color', headerName: 'Color' },
    { field: 'shipping', headerName: 'Shipping cost' },
  ]

  const fetchDispatches = async () => {
    // TODO: FIX THIS
    // ---
    dispatch(await getShipments());
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

  const calculateShipping = (dispatch) => {
    let cost = 0;
    switch(dispatch.country) {  
      case 'Sweden':
        cost += dispatch.weight * 1.3;
        break;
      case 'China':
        cost += dispatch.weight * 4;
        break;
      case 'Brazil':
        cost += dispatch.weight * 8.6;
        break;
      case 'Austrailia':
        cost += dispatch.weight * 7.2;
        break;
    }
    sumShippingWeight += dispatch.weight;
    sumShippingCost += cost;
    return cost.toFixed(2);
  }

  useEffect(() => {
    dispatch(clearNewShipments());    
    fetchDispatches()
    // errors in useeffect
  }, [dispatches]);

  const handleDeleteDispatch = async (dispatchId) => {
    const response = await dispatch(deleteShipment(dispatchId));
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
            <div className='dispatches'>
              <div className='dispatches_info'>
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
                  {dispatches.map((dispatch) => {
                    return(
                    <TableRow key={dispatch.id}>
                      <TableCell>
                        <IconButton aria-label='dispatch delete' onClick={() => handleDeleteDispatch(dispatch.id)} className="dispatch_delete_icon">
                          <DeleteIcon className='dispatch_delete_button'/>
                        </IconButton>
                      </TableCell>
                      <TableCell style={{ lineBreak: 'auto' }}>{dispatch.name}</TableCell>
                      <TableCell>{dispatch.weight} kg</TableCell>
                      <TableCell
                        style={{
                            backgroundColor: `rgb(${dispatch.color})`,
                            height: '100%',
                        }}
                      ></TableCell>
                      <TableCell>{calculateShipping(dispatch)} kr</TableCell>
                    </TableRow>)
                  })}
                </TableBody>
              </Table>
              </div>
            </div>
            <Typography variant="h5" style={{ marginTop: '20px' }} >
              Outgoing dispatches
            </Typography>
            <Typography variant="h6">
              Total sum of shipping fees: {sumShippingCost} kr
            </Typography>
            <Typography variant="h6">
              Total sum of shipping weight: {sumShippingWeight} kg
            </Typography>
        </div>
      </>
  );
}