import { APIService } from "../../helpers/APIService";

export const getShipments = () => {
  return new Promise(async (resolve) => {
    try {
      const { data } = await APIService.getShipments();
      resolve({
        type: 'GET_SHIPMENTS_SUCCESS',
        payload: data,
      });
      
    } catch(err) {
      resolve({
        type: 'GET_SHIPMENTS_ERROR',
        payload: err.message,
      });
    }
  });
}

export const addShipment = (shipment) => {
  return async () => {
    console.log(shipment)
    try {
      await APIService.addShipment(shipment);
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
      await APIService.deleteShipment(shipmentId);
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