import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usefulReducer from './usefulReducer';

// const reducers= combineReducers({
//   loginReducer : usefulReducer
//   });

// export const Store = configureStore(reducers);

// export const Store = configureStore({
//   reducer:{
//     loginReducer: usefulReducer
//   }
// })

export const Store = configureStore({ reducer: usefulReducer });
