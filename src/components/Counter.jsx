import { useState } from "react";
import "./Counter.css"

const Counter = (props) => {

    const {count, setCounter, index} = props

    const increase = () => {
        setCounter(index, count+1)
    }

    const decrease = () => {
        setCounter(index, count-1)
    }

    return (
        <div className="counter">
            <button onClick={increase} >+</button>
            <span>{count}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;