function nextShipmentId(shipments) {
  const maxId = shipments.reduce((maxId, shipment) => Math.max(shipment.id, maxId), -1)
  return maxId + 1
}

//{ id: 1, name: 'hatty', weight: 20, color: 'black', country: 'Sweden'},
   // { id: 2, name: 'matty', weight: 15, color: 'blue', country: 'China'},
    //{ id: 3, name: 'marty', weight: 2, color: 'green', country: 'Brazil'},

const initialState = {
  new: 3,
  booked: [
    { id: 1, name: 'hatty', weight: 20, color: 'black', country: 'Sweden'},
    { id: 2, name: 'matty', weight: 15, color: 'blue', country: 'China'},
    { id: 3, name: 'marty', weight: 2, color: 'green', country: 'Brazil'},
  ],
  error: null
}

export function ShipmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_NEW_SHIPMENTS':
      return {
        ...state,
        new: action.payload,
      }
    case 'GET_SHIPMENTS_SUCCESS':
    case 'ADD_SHIPMENT_SUCCESS':
    case 'DELETE_SHIPMENT_SUCCESS':
      return {
        ...state,
        booked: action.payload,
      }
    case 'GET_SHIPMENTS_ERROR':
    case 'ADD_SHIPMENT_ERROR':
    case 'DELETE_SHIPMENT_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}