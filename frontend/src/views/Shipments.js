import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


// Components
import NameInput from './input/Name';
import WeightInput from './input/Weight';
import CountryInput from './input/Country';
import ColorInput from './input/Color';

export default function Shipments() {
  const dispatch = useDispatch();
  // State
  const shipment = useSelector((state) => state.shipment)
  
  const [isValid, setIsValid] = useState(false);
  const [response, setResponse] = useState("");
  
  const handleSubmit = (event) => {
    if (!isValid) {
      setResponse("Invalid")
    }
  }

  const handlePOST = () => {

  }

  return(
      <>
        <Navbar />
        <div className='main'>
            <h1 className='shipments_header'>Create a shipment</h1>
            {response.length > 0 ? (
              <p className="input-view-respMessage">{response}</p>
            ) : (
              ""
            )}
            {isValid ? (
              <p>Please fill in entire form before submiting</p>
            ) : (
              ""
            )}
          <div className='shipments'>
            <div className='shipments_form'>
              <NameInput />
              <WeightInput />
              <ColorInput />
              <CountryInput />
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            </div>
        </div>
      </>
  );
}