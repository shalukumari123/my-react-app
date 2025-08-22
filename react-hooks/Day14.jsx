// 14. useEffect (with cleanup)
// 📌 Concept
// Runs side effects (API calls, timers, subscriptions).
// Runs after render.
// Dependencies array controls when it runs.
// Cleanup function prevents memory leaks.


//Example: Timer with Cleanup
// import React, {useState,useEffect} from 'react';

// const TimerWithCleanup = () => {
//     const [count,SetCount]=useState(0);
// useEffect(()=>{
    
//     const interval=setInterval(()=>{
//         SetCount(pre=>pre+1)

//     },1000)
    
//     return ()=>clearInterval(interval)

// },[]);
//   return (
//     <div>
//         <h1>Timer</h1>
//       <h1>Count:{count}</h1>
//     </div>
//   )
// }

// export default TimerWithCleanup;


//👉 Practice: Create a start/stop timer.

import React, {useState,useEffect} from 'react';

const TimerWithCleanup = () => {
    const [count,SetCount]=useState(0);
    const [isRunning,SetIsRunning]=useState(false)
useEffect(()=>{
    if(isRunning){
 const interval=setInterval(()=>{
        SetCount(pre=>pre+1)

    },1000)
    
    return ()=>clearInterval(interval)
    }
   

},[isRunning]);

const resetHandler=()=>{
    SetCount(0);
    SetIsRunning(false)

}
const StartStopHandler=()=>{
    SetIsRunning(pre=>!pre)

}
  return (
    <div>
        <h1>Timer</h1>
      <h1>Count:{count}</h1>
      {/* <button onClick={()=>SetIsRunning(true)}>Start</button>
      <button onClick={()=>SetIsRunning(false)}>Stop</button> */}
      <button onClick={StartStopHandler}>{isRunning?'Stop':'Start'}</button>
      <button onClick={resetHandler}>Reset</button>


    </div>
  )
}

export default TimerWithCleanup;
