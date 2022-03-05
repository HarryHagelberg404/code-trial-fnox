import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function WeightInput() {
  return (
    <>
      <label>Weight:</label>
      <input
        type="text"
        name="name-input"
      />
    </>
  );
}