import { combineReducers } from "redux";
import { ShipmentReducer } from "../reducers/Shipment";

const reducers = combineReducers({
  shipments: ShipmentReducer,
})

export default reducers