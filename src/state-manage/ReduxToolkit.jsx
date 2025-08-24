// 2. Redux Toolkit
// 📌 Concept
// Official, modern way of using Redux.
// Uses slices (state + reducers).
// Store holds global state.
// dispatch to trigger actions.
// useSelector to read state.
// ✅ Example: Counter with Redux Toolkit
// counterSlice.js
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

function debounce(fn,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>fn.apply(this,args),delay)
    }
}
//debounce()
const log = debounce((msg) => console.log(msg), 1000);

log("Hello");
log("Hello again");
log("Final Hello");
