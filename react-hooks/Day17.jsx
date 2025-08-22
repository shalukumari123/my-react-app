// 17. useCallback (Performance)
// 📌 Concept
// Memoizes functions so they don’t re-create on every render.
// Useful when passing functions to child components.
// ✅ Example: Prevent Re-rendering of Child

// import React, {useState, useCallback} from 'react'

// const Child = ({onClickFromParent}) => {
//     console.log('Child render')
//   return (<button onClick={onClickFromParent}>Click Me</button>
    
//   )
// }


// const ParentuseCallback = () => {
//     const [count,setCount]=useState(0);
//     const callBackHandler=useCallback(()=>{
//     console.log('Button Click')
//     },[])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//       <Child onClickFromParent={callBackHandler} />
//     </div>
//   )
// }

// export default ParentuseCallback;

//👉 Practice: Use useCallback to prevent unnecessary child renders.

import React, { useState, useCallback } from "react";

// Child component
const Child = React.memo(({ onIncrement }) => {
  console.log("Child re-rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default function Preventnnecessarychildrender() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ useCallback ensures "onIncrement" has a stable reference
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Child receives memoized function */}
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

// 🔹 React.memo
// What it does: A Higher-Order Component (HOC) that prevents a component from re-rendering if its props didn’t change.
// Use case: Optimize functional components that receive props, especially heavy UI children.
// 🔹 useMemo
// What it does: A React hook that memoizes a value (the result of a calculation) so that expensive computations are not re-run unnecessarily.
// Use case: Optimize expensive calculations or derived values inside components.