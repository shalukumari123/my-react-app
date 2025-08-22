// 16. useMemo (Performance)
// 📌 Concept

// Memoizes (caches) expensive calculations.

// Runs only when dependencies change.

//Example: Expensive Calculation
// import React,{useMemo,useState} from 'react';

// const ExpensiveCalculation = () => {
//     const [count,SetCount]=useState(0)
//     const expensiveCal=useMemo(()=>{
//         console.log('Expensive cal......');
//         return count*1000;
//     },[count])
//   return (
//     <div>
//       <h1>expensiveCal:{expensiveCal}</h1>
//       <button onClick={()=>SetCount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default ExpensiveCalculation;

//👉 Practice: Optimize a large list rendering using useMemo.

import React ,{useState,useMemo} from 'react';

const OptimizeLargeList = () => {
    const [search,SetSearch]=useState('')
    const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    //console.log(bigList)
    const filterList=useMemo(()=>{
      console.log('Filtering....',search);
      return bigList.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))
    },[search,bigList])
  return (
    <div>
        <input type="text" placeholder='Search Item' value={search} onChange={(e)=>SetSearch(e.target.value)} />
      {filterList.map((item,index)=>(<p key={index}>{item}</p>))}
    </div>
  )
}

export default OptimizeLargeList;
