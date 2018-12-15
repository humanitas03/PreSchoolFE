import { actionType } from '../reducer/userReducer';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: actionType.SUCCESS, message };
}

function error(message) {
    return { type: actionType.ERROR, message };
}

function clear() {
    return { type: actionType.CLEAR };
}