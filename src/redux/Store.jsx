import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import Reducers from "./Reducers";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const Store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export const persistor = persistStore(Store);
