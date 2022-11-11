import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import usefulReducer from './usefulReducer';

// const persistedState = loadState();

export const Store = configureStore({ reducer: usefulReducer  }, applyMiddleware(thunk) );

Store.subscribe(() => {
    saveState({
        email: Store.getState().user,
        isLogged: Store.getState().isLogged,
        cart :Store.getState().cart
    });
});