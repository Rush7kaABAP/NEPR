import { combineReducers } from 'redux';
// import { cartReducer } from './modules/cart';
import { brandSlice } from './modules/brand';
import { deviceSlice } from './modules/device';
import { deviceTypeSlice } from './modules/deviceType';
import { userReducer } from './modules/user';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  //   cart: cartReducer,
  brand: brandSlice.reducer,
  device: deviceSlice.reducer,
  deviceType: deviceTypeSlice.reducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
