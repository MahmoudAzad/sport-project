import { ADDTOCART, DELETEUSERDATA, EDITUSERDATA, REMOVECART, SETISLOGGEDIN, SETISLOGGEDOUT, SETTOKEN, SETUSERDATA } from "./usefulTypes"


// ست کردن اطلاعات کاربر

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

    // console.log(" ACTION addtocart" , product);
    return async (dispatch) => {
        await dispatch({ type:ADDTOCART , payload : product})
    }
}

export const removeCart = (product) =>{
    console.log("hazf action =>" , product);
    return async(dispatch) =>{
        await dispatch ({type : REMOVECART , payload : product})
    }
}




