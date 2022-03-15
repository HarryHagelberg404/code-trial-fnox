function nextShipmentId(shipments) {
  const maxId = shipments.booked.reduce((maxId, shipment) => Math.max(shipment.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  new: 0,
  booked: [],
  error: null
}

export function BoxesReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_NEW_BOXES':
      return {
        ...state,
        new: action.payload,
      }
    case 'ADD_BOX_SUCCESS':
      return {
        ...state,
        new: state.new + 1,
      }
    case 'GET_BOXES_SUCCESS':
      return {
        ...state,
        booked: action.payload,
        
      }
    case 'GET_BOXES_ERROR':
    case 'ADD_BOX_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}