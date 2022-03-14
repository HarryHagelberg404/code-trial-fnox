import axios from 'axios';

const URL = process.env.SERVER_ENDPOINT || 'http://localhost:8081';

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
      const response = await axios.post(
        `${URL}/api/boxes`,
        box,
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response
    } catch (err) {
      throw err
    }
  },
}