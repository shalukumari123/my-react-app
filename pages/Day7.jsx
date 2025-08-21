// 7. Forms (Uncontrolled)
// 📌 Uncontrolled Components

// Form input managed by DOM directly, accessed via useRef.
import React,{useRef} from 'react'

const Uncontrolled = () => {
    const inputRef=useRef()
    const handler=()=>{
        console.log(`You Typed:${inputRef.current.value}`)
    }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handler}>Submit</button>
    </div>
  )
}

export default Uncontrolled

