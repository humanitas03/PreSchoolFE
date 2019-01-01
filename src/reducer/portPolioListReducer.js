const actionType = {
  SET_POLIOES: 'portPolioList.setPolioes',
};

const initialState = {
  polioes: [],
};

function reducer(state = initialState, action) {
  //
  return {
    users: portPoloesReducer(state.polioes, action),
  };
}

function portPoloesReducer(polioesState, { type, payload }) {
  //
  switch (type) {
    case actionType.SET_POLIOES:
      return [...payload];
    default:
      return polioesState;
  }
}

export default reducer;
export { actionType, reducer };
