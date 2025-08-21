// 2. Props & State
// 📌 Concepts

// Props: Read-only data passed from parent → child.

// State: Data managed inside a component.
// function User(props){
//     console.log(props,'pankaj')
// return <>Hello, {props.name}</>
// }

// export default User;
//State in Functional Component
import {useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    // const Increase=()=>{
    //     setCount(count+1);
    // }
    return (
        <>
        <h1>Count:{count}</h1>
        {/* <button onClick={Increase}>Increase</button> */}
         <button onClick={()=>setCount(count+1)}>Increase</button>
        </>
    )

}

export default Counter;