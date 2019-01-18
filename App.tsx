import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/config/setupStore';
import AppNavigator from './src/AppNavigator';

const { store } = configureStore();

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
