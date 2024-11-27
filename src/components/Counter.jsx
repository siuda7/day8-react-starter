import { useState } from "react";
import "./Counter.css"

const Counter = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1)
    }

    const decrease = () => {
        setCount(count-1)
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