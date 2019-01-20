import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import configureStore from './src/config/setupStore';

const { store } = configureStore();

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
