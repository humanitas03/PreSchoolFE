
import stdApi from '../api/studentApi';
import { actionType } from '../reducer/userListReducer';


function findPolioes(stdId) {
  return (dispatch) => stdApi.findPolioList(stdId)
    .then((portpolioes) => {
      dispatch({
        type: actionType.SET_POLIOES,
        payload: portpolioes,
      });
    });
}

export default {
  findPolioes,
};
