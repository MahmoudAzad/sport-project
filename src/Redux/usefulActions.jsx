import { ADDTOCART, ADDTOWISHLIST, CARTDRAWER, DELETEUSERDATA, EDITUSERDATA, REMOVECART, REMOVEWISHLIST, SETISLOGGEDIN, SETISLOGGEDOUT, SETUSERDATA } from "./usefulTypes"


export const setUserData = (user) => {
    return async (dispatch) => {
        await dispatch({ type: SETUSERDATA, payload: user })
    }
}

export const editUserData = (user)=>{
    return async (dispatch) => {
        await dispatch({type: EDITUSERDATA, payload: user})
    }
}

export const setIsLoggedIn = () => {
    return async (dispatch) => {
        await dispatch({ type: SETISLOGGEDIN })
    }
}

export const setIsLoggedOut = () => {
    return async (dispatch) => {
        await dispatch({ type: SETISLOGGEDOUT })
    }
}

export const deleteUserData = () => {
    return async (dispatch) => {
        await dispatch({ type: DELETEUSERDATA })
    }
}

export const addToCart = (product) =>{
    
    return async (dispatch) => {
        await dispatch({ type:ADDTOCART , payload : product})
    }
}

export const removeCart = (product) =>{
    return async(dispatch) =>{
        await dispatch ({type : REMOVECART , payload : product})
    }
}

export const cartDrawer = (item)=>{
    return async (dispatch) => {
        await dispatch({type: CARTDRAWER, payload: item})
    }
}

export const addToWishlist = (item)=>{
    return async (dispatch) => {
        await dispatch({type: ADDTOWISHLIST, payload: item})
    }
}

export const removeWishList = (item)=>{
    return async (dispatch) => {
        await dispatch({type: REMOVEWISHLIST, payload: item})
    }
}



