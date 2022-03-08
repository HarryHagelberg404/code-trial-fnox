import React, { useState, useEffect } from "react";
// Color picker found at: https://github.com/Simonwep/pickr
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";
import { Typography } from "@material-ui/core";
import { Alert } from '@mui/material';

// Comparing color with help from table: http://en.wikipedia.org/wiki/HSL_and_HSV
// Specified a "blue range" and then converts to HSV and check the first value.

export default function ColorInput({ setValidColor }) {;
  const [color, setColor] = useState('#3faf2a');
  const [message, setMessage] = useState('');
  const blueStart = 190;
  const blueRange = 60;

  const isBlueColor = (hsvArray) => {
    const hValue = hsvArray[0];
    if (hValue > blueStart && hValue < (blueStart + blueRange)) {
      // Blue hValue but we need to check for black/white value
      if(hsvArray[1] < 30 || hsvArray[2] < 20) {
        return false;
      }
      return true;
    }
    return false;
  }
  
  useEffect(() => {
    const pickr = Pickr.create({
      el: ".color-picker",
      theme: "classic",
      default: "#3faf2a",

      components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: {
          hex: false,
          rgba: false,
          hsla: false,
          hsva: false,
          cmyk: false,
          input: false,
          clear: true,
          save: true,
        },
      },
    });
    pickr.on("save", (...args) => {
      let color;
      if (args[0] === null) {
        setValidColor(false);
        setMessage('You must submit a valid color - Please fix');
        setColor('');
      } else if (isBlueColor(pickr.getSelectedColor().toHSVA())) {
        setValidColor(false);
        setMessage('You are not allowed to submit any blue color - Please fix');
        setColor('');
      } else {
        color = pickr.getSelectedColor().toRGBA();
        color = color.splice(0, 3).toString();
        let colorArr = JSON.parse('[' + color + ']')
        colorArr = colorArr.map(val => val.toFixed(3));
        setValidColor(true)
        setMessage('');
        setColor(colorArr.toString());
      }
    });
  }, []);

  return (
    <>
      {message.length <= 0 ?
        ''
      :
        <Alert severity='warning'>{message}</Alert>
      }
      <Typography variant="body2" color="textSecondary">Box color:</Typography>
      <div className="color-div">
        <div className="color-picker"></div>
        <input type="hidden" name="color" value={color} />
      </div>
    </>
  );
}

/*
        <input
          className="color-box"
          type="text"
          readOnly={true}
          style={{ background: `rgb(${color})` }}
        />
*/