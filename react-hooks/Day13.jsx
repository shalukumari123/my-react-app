// 13. useState
// 📌 Concept
// Lets you add state to a functional component.
// Returns an array: [state, setState].
// Updating state triggers re-render.


//Example:Counter
// import React,{useState} from 'react';

// const CounterWithHokks = () => {
//     const [count,setCount]=useState(0);
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default CounterWithHokks


//👉 Practice: Build a like button that toggles between “Liked ❤️” and “Like 👍”.
import React,{useState} from 'react';

const ToggleLikeButton = () => {
    const [likeButton,SetlikeButton]=useState('❤️');
    const handler=()=>{
        
           SetlikeButton(likeButton=='❤️'?'👍':'❤️')
    }

  return (
    <div>
      <h1>{likeButton}</h1>
      <button onClick={handler}>Toggle</button>
    </div>
  )
}

export default ToggleLikeButton;


