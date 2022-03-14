import axios from 'axios';

const URL = process.env.SERVER_ENDPOINT || 'http://localhost:4000';

export const APIService = {
  async getBoxes() {
    try {
      const response = await axios.get(`${URL}/api/boxes`);
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
        `${URL}/api/boxes`,
        boxAsFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      return response
    } catch (err) {
      throw err
    }
  },
}