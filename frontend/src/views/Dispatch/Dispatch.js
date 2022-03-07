import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';


export default function Dispatch({ dispatch }) {

  const calculateShipping = (weight, country) => {
    let cost = 0
    switch(country) {
      default:

      case 'Sweden':
        cost = weight * 1.3;
        break;
      case 'China':
        cost = weight * 4;
        break;
      case 'Brazil':
        cost = weight * 8.6;
        break;
      case 'Austrailia':
        cost = weight * 7.2;
        break;
    }
    return cost.toFixed(2);
  }

  return (
    <>
      <Card className='dispatch'>
        <div className="dispatch-color" style={{backgroundColor: dispatch.color}}></div>
        <CardContent>
          <div className="dispatch_content">
            <Typography variant="h5" gutterBottom>
              Reciever: {dispatch.name}
            </Typography>
            <Typography variant="h6">
              Weight: {dispatch.weight} kg
            </Typography>
            <Typography variant="h6">
              Shipping cost: {calculateShipping(dispatch.weight, dispatch.country)} kr
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            color: {dispatch.color}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}