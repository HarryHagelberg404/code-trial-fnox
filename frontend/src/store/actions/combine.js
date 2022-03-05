import { combineReducers } from "redux";
import { ShipmentReducer } from "../reducers/Shipment";

// Combine reducers into 1 object. Blogposts will be placed soon
const reducers = combineReducers({
  shipments: ShipmentReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>