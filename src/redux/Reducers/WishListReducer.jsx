import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const wishlistAdapter = createEntityAdapter();
const initialState = wishlistAdapter.getInitialState();

const WishListReducer = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      console.log("id action => ", id);
      const repeatedItem = state.entities[id];
      if (repeatedItem) {
        alert("این محصول قبلا به لیست علاقه مندی های شما اضافه شده");
      } else {
        const newItem = { ...action.payload };
        wishlistAdapter.addOne(state, newItem);
        console.log("added added");
      }
    },
    removedFromWishList: (state, action) => {
      const { id } = action.payload;
      wishlistAdapter.removeOne(state, id);
    },
    removedFromWishListCheck: (state, action) => {
      const productIdsToRemove = action.payload.map((product) => product.id);
      wishlistAdapter.removeMany(state, productIdsToRemove);
    },
  },
});

export const {
  selectIds: selectWishlistIds,
  selectById: selectWishlistById,
  selectAll: selectAllWishlists,
} = wishlistAdapter.getSelectors((state) => state.persistedReducer.wishList);

export const { addToWishlist, removedFromWishList, removedFromWishListCheck } =
  WishListReducer.actions;
export default WishListReducer.reducer;
