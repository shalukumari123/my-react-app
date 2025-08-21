// 6. Forms (Controlled)
// 📌 Controlled Components

// React controls the form input via state.
import React, {useState} from 'react'

const Controlled = () => {
    const [data,setData]=useState('');
    const handler=(e)=>{
        setData(e.target.value)

    }
  return (
    <div>
      <input type="text" value={data} onChange={handler}/>
      <p>You Typed:{data}</p>
    </div>
  )
}

export default Controlled
