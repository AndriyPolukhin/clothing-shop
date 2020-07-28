/**
 * STORE FILE
 */
// * Dependencies
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// * Setup the middleware
const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// * STORE
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// * Call for individual sagas
sagaMiddleware.run(rootSaga);

// * Persistor
export const persistor = persistStore(store);

// * Export Store
export default { store, persistor };
