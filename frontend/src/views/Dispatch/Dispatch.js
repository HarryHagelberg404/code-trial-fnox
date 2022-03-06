import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';


export default function Dispatch({ dispatch }) {
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
              weight: {dispatch.weight} kg
            </Typography>
            <Typography variant="h6">
              destination: {dispatch.country}
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