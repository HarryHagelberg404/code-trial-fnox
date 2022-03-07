import axios from 'axios';

const URL = process.env.SERVER_ENDPOINT || 'https://localhost:4000';
const API_KEY = process.env.API_KEY || 'test1337';

export const APIService = {
  async getShipments() {
    try {
      const response = await axios.get(`${URL}/api/shipment/getShipments`);
      return response;
    } catch (err) {
      throw err
    }
  },

  async addShipment(shipment) {
    try {
      const shipmentAsFormData = new FormData();
      shipmentAsFormData.append('name', shipment.name);
      shipmentAsFormData.append('weight', shipment.weight);
      shipmentAsFormData.append('color', shipment.color);
      shipmentAsFormData.append('country', shipment.country);
      const response = await axios.post(
        `${URL}/api/shipment/createShipment`,
        shipmentAsFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      return response
    } catch (err) {
      throw err
    }
  },

  async deleteShipment(shipmentId) {
    try {
      const response = axios.delete(
        `${URL}/api/shipment/delete/${shipmentId}`
      );
      return response
    } catch (err) {
      throw err;
    }
  },
}