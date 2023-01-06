import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {  loadState, saveState } from './localStorage';
import usefulReducer from './usefulReducer';

import { legacy_createStore as createStore} from 'redux'






// export const Store = configureStore({ reducer: usefulReducer  }, applyMiddleware(thunk) );

const presistedState = loadState();

export const Store = createStore(
    usefulReducer,
    presistedState,
    (applyMiddleware(thunk))
 );
 
 Store.subscribe(() => { 
    saveState({ 
        user: Store.getState().user,
        isLogged: Store.getState().isLogged,
        cart:Store.getState().cart,
        wishList:Store.getState().wishList,
    });
});















