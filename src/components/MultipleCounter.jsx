import { useState } from "react"
import CounterGroupGenerator from "./CounterGroupGenerator"
import CounterGroup from "./CounterGroup"

const MultipleCounter = () => {

    const [size, setSize] = useState(5)

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize} />
            <CounterGroup size={size}/>
        </div>
    )
}

export default MultipleCounter