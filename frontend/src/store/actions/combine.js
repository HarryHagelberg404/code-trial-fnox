import { combineReducers } from "redux";
import { BoxesReducer } from "../reducers/Boxes";

const reducers = combineReducers({
  boxes: BoxesReducer,
})

export default reducers