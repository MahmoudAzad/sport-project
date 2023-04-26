import {
  ADDTOCART,
  ADDTOWISHLIST,
  CARTDRAWER,
  DELETEUSERDATA,
  EDITUSERDATA,
  REMOVECART,
  REMOVEWISHLIST,
  SETISLOGGEDIN,
  SETISLOGGEDOUT,
  SETUSERDATA,
  REMOVEWISHLISTCHECKS,
} from "./Types";

export const initialState = {
  user: undefined,
  isLogged: false,
  cart: [],
  wishList: [],
  cartDrawer: false,
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return Object.assign({}, state, {
        ...state,
        user: action.payload,
      });

    case EDITUSERDATA:
      return {
        ...state,
        user: (state.user = action.payload),
      };

    case DELETEUSERDATA:
      return Object.assign({}, state, {
        ...state,
        user: undefined,
      });

    case SETISLOGGEDIN:
      return Object.assign({}, state, {
        ...state,
        isLogged: true,
      });

    case SETISLOGGEDOUT:
      return Object.assign({}, state, {
        ...state,
        isLogged: false,
      });

    case ADDTOCART:
      const item = state.cart.find(
        (product) =>
          product.id === action.payload.id &&
          product.title === action.payload.title
      );
      // const carts = state.cart.filter(item => item.title !== action.payload.title);

      if (item) {
        return Object.assign({}, state, {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id && item.title === action.payload.title
              ? {
                  ...item,
                  quantify: item.quantify + 1,
                }
              : item
          ),
        });
      }

      return Object.assign({}, state, {
        ...state,
        cart: [...state.cart, action.payload],
        quantify: (action.payload.quantify = 1),
      });

    // case ADDTOCART:

    //     const reProduct = state.cart.find(item => item.title === action.payload.title);
    //     if (reProduct) {
    //         const carts = state.cart.filter(item => item.title !== action.payload.title);
    //         return Object.assign({}, state, {
    //             ...state,
    //             cart: [...carts, reProduct],
    //             quantify: state.quantify += 1
    //         })
    //     }

    //     return Object.assign({}, state, {
    //         ...state,
    //         cart: [...state.cart, action.payload],
    //         quantify: action.payload.quantify = 1
    //     })

    case REMOVECART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.title !== action.payload.title),
      };

    case CARTDRAWER:
      return Object.assign({}, state, {
        ...state,
        cartDrawer: action.payload,
      });

    // case ADDTOWISHLIST:
    //     return Object.assign({}, state, {
    //         ...state,
    //         wishList: [...state.wishList, action.payload]
    //     })
    case ADDTOWISHLIST:
      const repeatedItem = state.wishList.find(
        (product) =>
          product.id === action.payload.id &&
          product.title === action.payload.title
      );

      if (repeatedItem) {
        return Object.assign({}, state, {
          ...state,
          wishList: state.wishList.map((item) =>
            item.id === action.payload.id && item.title === action.payload.title
              ? {
                  ...item,
                }
              : item
          ),
        });
      }
      return Object.assign({}, state, {
        ...state,
        wishList: [...state.wishList, action.payload],
      });

    case REMOVEWISHLIST:
      console.log("reducer 1 item =>", action.payload.title);
      return Object.assign({}, state, {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.title !== action.payload.title
        ),
      });

    case REMOVEWISHLISTCHECKS:
      return Object.assign({}, state, {
        ...state,
        wishList: state.wishList.filter(
          (item) => !action.payload.includes(item)
        ),
      });

    default:
      return state;
  }
};

export default Reducers;
