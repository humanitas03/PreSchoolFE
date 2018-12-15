const actionType = {
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    
    LOGOUT: 'USERS_LOGOUT',
};

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (actionType) {
    case actionType.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case actionType.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case actionType.LOGIN_FAILURE:
      return {};
    case actionType.LOGOUT:
      return {};
    default:
      return state
  }
}

export default authentication;
export { actionType, authentication };