const actionType = {
    SET_USER: 'user.setUser',
    SET_USER_PROP: 'user.setUserProp',
    LOGIN_USER: 'user.loginUser'
  };
  
  const initialState ={ 
    //초기상태 user(==teacher)정보 정의
    user:
    {
        id:'',
        pwd:''
    },

    teacher:{
        id:'',
        name:'',
        phone:''
    }
};
  
  
  function reducer(state = initialState, action) {
    //
    return {
      user: userReducer(state.user, action),
      teacher : userReducer(state.teacher, action)
    };
  }
  
  function userReducer(userState, { type, payload }) {
    //
    switch (type) {
      case actionType.SET_USER_PROP:
        return {
          ...userState,
          [payload.propName]: payload.value
        };
      
      case actionType.LOGIN_USER:
        return {
            ...userState,
            payload:user
        };

    case actionType.SET_USER:
      return payload;
  
      default:
        return userState;
    }
  }
  
  export default reducer;
  export { actionType, reducer };
  