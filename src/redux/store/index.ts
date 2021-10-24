import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from "../reducers";
import { createLogger } from 'redux-logger';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: [createLogger({})],
});


const persistor = persistStore(store);
export { store, persistor }

export type RootState = ReturnType<typeof persistedReducer>;
