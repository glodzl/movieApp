import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/AppNavigator';
import configureStore from './src/config/setupStore';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);
