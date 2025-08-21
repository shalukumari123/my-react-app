// Mini Project 2: Convert Class → Functional

// Write a class-based counter component with state + lifecycle (componentDidMount).

// Convert it into a functional component using useState + useEffect.
//Class-based Counter Component
// import React from "react";

// class CounterClass extends React.Component {
//   constructor(props) {
//     super(props);
//     // State
//     this.state = { count: 0 };
//   }

//   // Lifecycle method
//   componentDidMount() {
//     console.log("CounterClass mounted ");
//   }

//   render() {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Class Counter: {this.state.count}</h2>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

// export default CounterClass;


//Convert into Functional Component with Hooks
// import React, { useState, useEffect } from "react";

// function CounterFunctional() {
//   // useState hook replaces this.state
//   const [count, setCount] = useState(0);

//   // useEffect hook replaces componentDidMount
//   useEffect(() => {
//     console.log("CounterFunctional mounted ");
//   }, []); // empty dependency array = run once (like componentDidMount)

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Functional Counter: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default CounterFunctional;
// Differences:
// Class Component                   	Functional Component
// this.state = { count: 0 }	           useState(0)
// this.setState({ count: ... })	        setCount(...)
// componentDidMount()	                    useEffect(..., [])
// render() method	                         return JSX directly

