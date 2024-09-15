import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const BASE_URL = "http://localhost:5000";

// Utility function to handle errors
const handleError = (error, thunkAPI) => {
  return error.response
    ? error.response.data.message
    : error.message || "Something went wrong";
};

export const LoginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error, thunkAPI));
    }
  }
);

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/me`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleError(error, thunkAPI));
  }
});

export const Logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.delete(`${BASE_URL}/logout`);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleError(error, thunkAPI));
  }
});

// Utility reducers for pending, fulfilled, and rejected cases
const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
  state.isSuccess = false;
  state.message = "";
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState, // Reset state to initial
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, handlePending)
      .addCase(LoginUser.fulfilled, handleFulfilled)
      .addCase(LoginUser.rejected, handleRejected)
      .addCase(getMe.pending, handlePending)
      .addCase(getMe.fulfilled, handleFulfilled)
      .addCase(getMe.rejected, handleRejected)
      .addCase(Logout.fulfilled, (state) => {
        state.user = null; // Reset user state on logout
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
