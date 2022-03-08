import { APIService } from "../../helpers/APIService";

export const getBoxes = () => {
  return new Promise(async (resolve) => {
    try {
      const { data } = await APIService.getBoxes();
      resolve({
        type: 'GET_BOXES_SUCCESS',
        payload: data,
      });
      
    } catch(err) {
      resolve({
        type: 'GET_BOXES_ERROR',
        payload: err.message,
      });
    }
  });
}

export const addBox = (box) => {
  return async () => {
    try {
      await APIService.addBox(box);
      const { data } = await APIService.getBoxes();
      return({
        type: 'ADD_BOX_SUCCESS',
        payload: data,
      });
    } catch (err) {
      return({
        type: 'ADD_BOX_ERROR',
        payload: err.message,
      });
    }
  };
};

export const deleteBox = (boxId) => {
  return async () => {
    try {
      await APIService.deleteBox(boxId);
      const { data } = await APIService.getBoxes();
      return({
        type: 'DELETE_BOX_SUCCESS',
        payload: data,
      });
    } catch (err) {
      return({
        type: 'DELETE_BOX_ERROR',
        payload: err.message,
      });
    }
  };
};

export const clearNewBoxes = () => {
  return({
      type: 'CLEAR_NEW_BOXES',
      payload: 0,
    })
}