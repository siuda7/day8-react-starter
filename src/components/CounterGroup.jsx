import { useState } from "react"
import Counter from "./Counter"

const CounterGroup = (props) => {

    const {counters, setCounters} = props

    const setCounter = (index, value) => {
        setCounters(counters.with(index, value))
    }

    return (
        <div>
            {counters.map((count, index) => <Counter key={index} count={count} setCounter={setCounter} index={index}/>)} 
        </div>
    )
    
}

export default CounterGroup;