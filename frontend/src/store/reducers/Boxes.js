function nextShipmentId(shipments) {
  const maxId = shipments.booked.reduce((maxId, shipment) => Math.max(shipment.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  new: 3,
  booked: [
    { id: 1, name: 'hatty', weight: 20, color: '51, 231, 229', country: 'Sweden'},
    { id: 2, name: 'matty', weight: 15, color: '213, 54, 149', country: 'China'},
    { id: 3, name: 'marty', weight: 2, color: '213, 54, 149', country: 'Brazil'},
  ],
  error: null
}

// Testing reducer
BoxesReducer(initialState, {
  type: 'ADD_BOX_SUCCESS',
  payload: {
    name: 'matty',
    weight: 2,
    color: 'yellow',
    country: 'Brazil',
  }
})

export function BoxesReducer(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case 'CLEAR_NEW_BOX':
      return {
        ...state,
        new: action.payload,
      }
    case 'GET_BOXES_SUCCESS':
    case 'ADD_BOX_SUCCESS':
    case 'DELETE_BOX_SUCCESS':
      console.log(action.payload)
      return {
        ...state,
        new: state.new++,
        booked: {...action.payload, ...{id: nextShipmentId(state)}},
      }
    case 'GET_BOXES_ERROR':
    case 'ADD_BOX_ERROR':
    case 'DELETE_BOX_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}