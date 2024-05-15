import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/auth';
import productsReducer from './slices/products';
import cartReducer from './slices/cart';
import loadingReducer from './slices/loading';
import profileReducer from './slices/profile';
import orderReducer from './slices/order';
import { productsApi } from './services/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart : cartReducer,
  loading:loadingReducer,
  profile:profileReducer,
  order:orderReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/removeAccessToken') {
    return appReducer([], action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(productsApi.middleware)
});
setupListeners(store.dispatch)
export const persistor = persistStore(store);
