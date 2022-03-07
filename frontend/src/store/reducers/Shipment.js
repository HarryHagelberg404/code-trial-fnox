import { ShipmentActions, ShipmentType } from '../actions/Shipment';

function nextShipmentId(shipments) {
  const maxId = shipments.reduce((maxId, shipment) => Math.max(shipment.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  pending: false,
  newShipments: [
    { id: 1, name: 'hatty', weight: 20, color: 'black', country: 'Sweden'},
    { id: 2, name: 'matty', weight: 15, color: 'blue', country: 'China'},
    { id: 3, name: 'marty', weight: 2, color: 'green', country: 'Brazil'},
  ],
  error: null
}
export function ShipmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHIPMENT_SUCCESS':
      return {
        ...state,
        pending: false,
        newShipments: action.payload,
      }
    case 'SHIPMENT_PENDING':
      return {
        ...state,
        pending: true,
      }
    case 'SHIPMENT_ERROR':
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    default:
      return state;
  }
}