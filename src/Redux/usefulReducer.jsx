import { ADDTOCART, DELETEUSERDATA, EDITUSERDATA, REMOVECART, SETISLOGGEDIN, SETISLOGGEDOUT, SETTOKEN, SETUSERDATA } from "./usefulTypes";

const initialState = {
    user: undefined,
    isLogged: false,
    test: undefined,
    cart: []
}

const usefulReducer = (state = initialState, action) => {
    switch (action.type) {

        case SETUSERDATA:
            state.user = action.payload;

            return {
                ...state,
                user: state.user = action.payload
            }

        case EDITUSERDATA:
            // state.user = action.payload;

            return {
                ...state,
                user: state.user = action.payload
            }


        case DELETEUSERDATA:
            state.user = undefined;

            return {
                ...state,
                user: state.user = undefined,
            }

        case SETISLOGGEDIN:
            return {
                ...state,
                isLogged: state.isLogged = true

            }


        case SETISLOGGEDOUT:
            return {
                ...state,
                isLogged: state.isLogged = false
            }

        case ADDTOCART:
            const reProduct = state.cart.find(item => item.title === action.payload.title);

            if (reProduct) {
                action.payload.quantify += 1;
                const carts = state.cart.filter(item => item.title !== action.payload.title);
                return {
                    ...state,
                    cart: state.cart = [...carts, reProduct]
                }
            }

            action.payload.quantify = 1
            return {
                ...state,
                cart: state.cart = [...state.cart, action.payload]
            }

        case REMOVECART:
            return {
                ...state,
                cart : state.cart.filter(item => item.title !== action.payload.title)
            }

        default:
            return state

    }
}



export default usefulReducer;