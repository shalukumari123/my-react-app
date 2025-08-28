import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../state-manage/CounterSlice';

const CounterRedux = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
  return (
    <div>
      <h1>Redux Counter : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default CounterRedux
