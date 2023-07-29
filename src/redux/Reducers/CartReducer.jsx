import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import AddToCartModal from "../../components/Modal/AddToCartModal";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  cartDrawer: false,
});

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const repeatedItem = state.entities[id];
      if (repeatedItem) {
        state.entities[id] = {
          ...repeatedItem,
          quantity: repeatedItem.quantity + 1,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        cartAdapter.addOne(state, newItem);
      }
    },
    removedFromCart: (state, action) => {
      const { id } = action.payload;
      cartAdapter.removeOne(state, id);
    },
    changeShowCartDrawer: (state, action) => {
      state.cartDrawer = action.payload;
    },
  },
});

export const {
  selectIds: selectCartIds,
  selectById: selectCartById,
  selectAll: selectAllCarts,
} = cartAdapter.getSelectors((state) => state.persistedReducer.cart);

export const { addToCart, removedFromCart, changeShowCartDrawer } =
  CartReducer.actions;

export default CartReducer.reducer;
