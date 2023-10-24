import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore,  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  reducer: persistedReducer, // Usa el persistedReducer en lugar de rootReducer
});

const persistor = persistStore(store); // Agrega esto si planeas utilizarlo en otro lugar

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
