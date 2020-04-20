/**
 * STORE FILE
 */
// * Dependencies
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// * Setup the middleware
const middlewares = [logger];

// * STORE
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
