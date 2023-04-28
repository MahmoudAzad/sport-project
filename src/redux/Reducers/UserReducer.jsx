import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser, fetchRegisterUser } from "../../services/Services";

export const registerUser = createAsyncThunk(
  "/user/registerUser",
  async (values) => {
    const response = await fetchRegisterUser(values);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("/user/loginUser", async (values) => {
  const response = await fetchLoginUser(values);
  return response.data;
});

const UserReducer = createSlice({
  name: "user",
  initialState: {
    user: "",
    isLogged: false,
    status: "idle",
  },
  reducers: {
    logOutUser: (state, action) => {
      state.user = "";
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload.user.username;
        state.isLogged = true;
      })
      .addCase(registerUser.failed, (state, action) => {
        state.status = "failed";
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload.user.username;
        state.isLogged = true;
      })
      .addCase(loginUser.failed, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { logOutUser } = UserReducer.actions;

export default UserReducer.reducer;
