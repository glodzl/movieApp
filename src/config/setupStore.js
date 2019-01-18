import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

//import reducers from '../reducers';

const logger = createLogger();

const middleware = [logger];

export default () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  const persistor = persistStore(store);
  return { persistor, store };
};
