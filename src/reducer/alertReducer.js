const actionType = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

function alert(state = {}, action) {
    switch (actionType) {
      case actionType.SUCCESS:
        return {
          type: 'alert-success',
          message: action.message
        };
      case actionType.ERROR:
        return {
          type: 'alert-danger',
          message: action.message
        };
      case actionType.CLEAR:
        return {};
      default:
        return state
    }
  }

  export default alert;
  export { actionType, alert };