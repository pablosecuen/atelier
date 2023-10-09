import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import productSlice from './slices/productSlice';
import paymentSlice from './slices/paymentSlice';
import cartReducer from './slices/cartSlice';


// Define el rootReducer combinando los reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  users: userSlice,
  products: productSlice,
  payments: paymentSlice,
});


const store = configureStore({
  reducer: rootReducer,
});



export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
