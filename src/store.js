
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  //
  routing: routerReducer,
  userState : userReducer
  //add module
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
const dispatch = store.dispatch;

export default store;
export { dispatch };