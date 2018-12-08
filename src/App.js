
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './Routes';
import 'semantic-ui-css/semantic.min.css';


const App = () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
);

export default App;
