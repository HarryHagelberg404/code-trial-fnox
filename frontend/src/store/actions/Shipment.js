import { APIService } from "../../helpers/APIService";

export const getShipments = () => {
  return async () => {
    try {
      const { data } = await APIService.getShipments();
      return({
        type: 'GET_SHIPMENTS_SUCCESS',
        payload: data,
      });
      
    } catch(err) {
      return({
        type: 'GET_SHIPMENTS_ERROR',
        payload: err.message,
      });
    }
  };
}

export const addShipment = (shipment) => {
  return async () => {
    try {
      APIService.addShipment(shipment);
      const { data } = await APIService.getShipments();
      return({
        type: 'ADD_SHIPMENT_SUCCESS',
        payload: data,
      });
    } catch (err) {
      return({
        type: 'ADD_SHIPMENT_ERROR',
        payload: err.message,
      });
    }
  };
};

export const deleteShipment = (shipmentId) => {
  return async () => {
    try {
      APIService.deleteShipment(shipmentId);
      const { data } = await APIService.getShipments();
      return({
        type: 'DELETE_SHIPMENT_SUCCESS',
        payload: data,
      });
    } catch (err) {
      return({
        type: 'DELETE_SHIPMENT_ERROR',
        payload: err.message,
      });
    }
  };
};

export const clearNewShipments = () => {
  return({
      type: 'CLEAR_NEW_SHIPMENTS',
      payload: 0,
    })
}