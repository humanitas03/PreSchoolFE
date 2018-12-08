
import userApi from '../api/userApi';
import { actionType } from '../reducer/userReducer';

function findUser(id) {
  return (dispatch) => userApi.findUser(id)
    .then((user) => {
      dispatch({
        type: actionType.SET_USER,
        payload: user,
      });
    });
}

function setUserProp(propName, value) {
  return dispatch => {
    dispatch({
      type: actionType.SET_USER_PROP,
      payload: { propName, value }
    })
  }
}

function loginUser(user) {
  return () => userApi.signInUser(user);
}

export default {
  findUser,
  setUserProp,
  loginUser
};
