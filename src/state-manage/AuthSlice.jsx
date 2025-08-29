import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("auth")) ?? false,
  user:'',
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      // simple hardcoded user
      if (username === "admin" && password === "12345") {
        state.isLoggedIn = true;
        state.user=username;
        localStorage.setItem("auth", JSON.stringify(state.isLoggedIn));
      } else {
        state.error = "❌ Invalid username or password";
        state.isLoggedIn = false;      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("auth", JSON.stringify(state.isLoggedIn));
    },
  },
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;
 
