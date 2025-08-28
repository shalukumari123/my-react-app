// 2. Redux Toolkit
// 📌 Concept
// Official, modern way of using Redux.
// Uses slices (state + reducers).
// Store holds global state.
// dispatch to trigger actions.
// useSelector to read state.
// ✅ Example: Counter with Redux Toolkit
// counterSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => { state.value += 1; },
//     decrement: (state) => { state.value -= 1; },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

