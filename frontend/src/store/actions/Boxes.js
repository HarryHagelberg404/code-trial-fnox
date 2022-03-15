import { APIService } from "../../helpers/APIService";

export function getBoxes() {
  return function action(dispatch) {

    const request = APIService.getBoxes();

    return request.then(({ data }) => {
        dispatch({
          type: 'GET_BOXES_SUCCESS',
          payload: data,
        });
      }).catch((err) => {
        dispatch({
          type: 'GET_BOXES_ERROR',
          payload: err.message,
        })
      });
  };
}

export function addBox(box) {
  return function action(dispatch) {

    const request = APIService.addBox(box);

    request.then(() => {
        const { data } = APIService.getBoxes();
        dispatch({
          type: 'ADD_BOX_SUCCESS',
          payload: data,
        });
      }).catch((err) => {
        dispatch({
          type: 'ADD_BOX_ERROR',
          payload: err.message,
        });
      })
  };
}

export function clearNewBoxes() {
  return function action(dispatch) {
    dispatch({
      type: 'CLEAR_NEW_BOXES',
      payload: 0,
    })
  }
}