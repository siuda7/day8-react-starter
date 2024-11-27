import { useState } from "react"
import CounterGroupGenerator from "./CounterGroupGenerator"
import CounterGroup from "./CounterGroup"
import CounterGroupSum from "./CounterGroupSum"

const MultipleCounter = () => {

    const [counters, setCounters] = useState([0, 0, 0, 0, 0])

    return (
        <div>
            <CounterGroupGenerator counters={counters.length} setCounters={setCounters} />
            <CounterGroupSum counters={counters}/>
            <CounterGroup counters={counters} setCounters={setCounters}/>
        </div>
    )
}

export default MultipleCounter