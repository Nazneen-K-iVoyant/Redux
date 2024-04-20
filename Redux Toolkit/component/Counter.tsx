import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/Store'
import { decrement, increment, incrementByAmount } from '../state/counter/counterSlice'

const Counter = () => {


    const count=useSelector((state: RootState)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(10))} >Increment By Amount</button>{/*Passing the value */}
        </div>
    </div>
  )
}

export default Counter