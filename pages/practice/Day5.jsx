// 5. Lists & Keys
// 📌 Concepts

// Use .map() to render lists.

// Key prop: Helps React identify which items changed.
import React from 'react'

const ListKeys = () => {
    const Data=['React','Redux','Docker']
  return (
    <div>
      {Data.map((data,index)=>{
        return (
            <h1 key={index}>{data}</h1>
        )
      })}
    </div>
  )
}

export default ListKeys;
//⚠️ Best practice → Use unique id as key (not index).
