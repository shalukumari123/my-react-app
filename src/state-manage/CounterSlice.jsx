import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// import { Provider, useSelector, useDispatch } from "react-redux";
// import { store } from "../store";
// import { increment, decrement } from "./ReduxToolkit";

// function Counter() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </>
//   );
// }

// export default function CounterSlice() {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }
