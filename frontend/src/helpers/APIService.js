import axios from 'axios';

const URL = process.env.SERVER_ENDPOINT || 'https://localhost:4000';
const API_KEY = process.env.API_KEY || 'test1337';

export const APIService = {
  async getBoxes() {
    try {
      const response = await axios.get(`${URL}/api/box/getBoxes`);
      return response;
    } catch (err) {
      throw err
    }
  },

  async addBox(box) {
    try {
      const boxAsFormData = new FormData();
      boxAsFormData.append('name', box.name);
      boxAsFormData.append('weight', box.weight);
      boxAsFormData.append('color', box.color);
      boxAsFormData.append('country', box.country);
      const response = await axios.post(
        `${URL}/api/box/createBox`,
        boxAsFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      return response
    } catch (err) {
      throw err
    }
  },

  async deleteShipment(boxId) {
    try {
      const response = axios.delete(
        `${URL}/api/box/delete/${boxId}`
      );
      return response
    } catch (err) {
      throw err;
    }
  },
}