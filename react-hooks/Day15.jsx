// 15. useRef
// 📌 Concept
// Stores a mutable value that doesn’t trigger re-renders.
// Used to access DOM elements directly.
// Can store previous values.

//Example: Focusing an Input
// import React,{useRef} from 'react';

// const FocusingInputUseRef = () => {
//     const inputRef=useRef();
// const FocusHandler=()=>{
//     inputRef.current.focus();
// }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={FocusHandler}>Focus</button>
//     </div>
//   )
// }

// export default FocusingInputUseRef;

//👉 Practice: Store the previous value of a counter using useRef.
import React,{useState,useEffect,useRef } from 'react';

const CounterUsingUseRef = () => {
    const [count,SetCount]=useState(0);
    const previousRef=useRef(null);
    useEffect(()=>{
        previousRef.current=count
    },[count])
  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>previousRef:{previousRef.current}</h2>
      <button onClick={()=>SetCount(count+1)}>Increment</button>
      <button onClick={()=>SetCount(count-1)}>Decrement</button>
    </div>
  )
}

export default CounterUsingUseRef;

