import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function ColorInput() {
  return (
    <>
      <label>Color:</label>
      <input
        type="text"
        name="name-input"
      />
    </>
  );
}