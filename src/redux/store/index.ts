import {   configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from "../reducers";
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});


const persistor = persistStore(store);
export {store,persistor}

export type RootState = ReturnType<typeof persistedReducer>;
