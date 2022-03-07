import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";
// Color picker found at: https://github.com/Simonwep/pickr
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

export default function ColorInput() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.boxColorInput);
  
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
      // If user clears the chosen color
      let color;
      if (args[0] === null) {
        //Dispatch remove?
        console.log("hej")
      } else {
        color = pickr.getSelectedColor().toRGBA();
        color = color.splice(0, 3).toString();
        console.log(color);
        // Dispatch add?
      }
    });
  }, []);

  return (
    <>
     <label>Box color:</label>
      <div className="color-div">
        <div className="color-picker"></div>
        <input type="hidden" name="color-input" value={color} />
        <input
          className="color-box"
          type="text"
          readOnly={true}
          style={{ background: `rgb(${color})` }}
        />
      </div>
    </>
  );
}