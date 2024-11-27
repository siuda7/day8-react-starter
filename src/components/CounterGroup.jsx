import { useState } from "react"
import Counter from "./Counter"

const CounterGroup = (props) => {

    const {size} = props

    return (
        <div>
            {Array.from({ length: size }, (_, index) => <Counter key={index} />)} 
        </div>
    )
    
}

export default CounterGroup;