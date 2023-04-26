import {
  ADDTOCART,
  ADDTOWISHLIST,
  CARTDRAWER,
  DELETEUSERDATA,
  EDITUSERDATA,
  REMOVECART,
  REMOVEWISHLIST,
  REMOVEWISHLISTCHECKS,
  SETISLOGGEDIN,
  SETISLOGGEDOUT,
  SETUSERDATA,
} from "./Types";

export const SetUserData = (user) => {
  return async (dispatch) => {
    await dispatch({ type: SETUSERDATA, payload: user });
  };
};

export const EditUserData = (user) => {
  return async (dispatch) => {
    await dispatch({ type: EDITUSERDATA, payload: user });
  };
};

export const SetIsLoggedIn = () => {
  return async (dispatch) => {
    await dispatch({ type: SETISLOGGEDIN });
  };
};

export const SetIsLoggedOut = () => {
  return async (dispatch) => {
    await dispatch({ type: SETISLOGGEDOUT });
  };
};

export const DeleteUserData = () => {
  return async (dispatch) => {
    await dispatch({ type: DELETEUSERDATA });
  };
};

export const AddToCart = (product) => {
  return async (dispatch) => {
    await dispatch({ type: ADDTOCART, payload: product });
  };
};

export const RemoveCart = (product) => {
  return async (dispatch) => {
    await dispatch({ type: REMOVECART, payload: product });
  };
};

export const ChangeCartDrawer = (item) => {
  return async (dispatch) => {
    await dispatch({ type: CARTDRAWER, payload: item });
  };
};

export const AddToWishlist = (item) => {
  return async (dispatch) => {
    await dispatch({ type: ADDTOWISHLIST, payload: item });
  };
};

export const RemoveWishList = (item) => {
  console.log("action 1 item => ", item);
  return async (dispatch) => {
    await dispatch({ type: REMOVEWISHLIST, payload: item });
  };
};

export const RemoveWishListChecks = (item) => {
  console.log("thiiiiiiis => ", item);
  return async (dispatch) => {
    await dispatch({ type: REMOVEWISHLISTCHECKS, payload: item });
  };
};
