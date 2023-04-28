import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import UserReducer from "./UserReducer";
import WishListReducer from "./WishListReducer";

const Reducers = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  wishList: WishListReducer,
});

export default Reducers;
