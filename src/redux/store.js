/**
 * STORE FILE
 */
// * Dependencies
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

// * Setup the middleware
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// * STORE
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// * Persistor
export const persistor = persistStore(store);

// * Export Store
export default { store, persistor };
