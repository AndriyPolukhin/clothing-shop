/**
 * ROOT REDUCER: accumulates all reducers
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// * Config for persistReducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

// * create a rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// * Combined reducer
export default persistReducer(persistConfig, rootReducer);
