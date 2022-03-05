import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

//import { addNameInput } from "../../store/actions/NameInput";
//import { assignNameTrue, assignNameFalse } from "../../store/actions/NameAssigned";

export default function NameInput() {
  //onst dispatch = useDispatch();
  //const [isValidInput, setValidInput] = useState(true);
  //const nameInput = useSelector((state) => state.boxNameInput);
  //const nameMaxLength = 40;

  /*const validateInputHandler = (event) => {
    let input = event.target.value;
    if (input.length < 40) {
      //dispatch(addNameInput(event.target.value));
      //dispatch(assignNameTrue());
      setValidInput(true);
    } else {
      //dispatch(assignNameFalse());
      //setValidInput(false);
    }
  };*/

  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        name="name-input"
      />
    </>
  );
}