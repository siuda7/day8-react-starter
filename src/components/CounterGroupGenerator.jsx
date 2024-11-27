import { useState } from "react";

const CounterGroupGenerator = (props) => {

    const [currentSize, setCurrentSize] = useState(props.size)

    const MIN_VALUE = 0;

    const MAX_VALUE = 20;

    const handleInputChange = (event) => {
        setCurrentSize(event.target.value)
    }

    const handleReset = () => {
        if (currentSize !== props.size) props.setSize(currentSize)
    }

    return (
        <div>
            <span>Size:</span>
            <input 
                type="number" 
                min={MIN_VALUE} 
                max={MAX_VALUE} 
                value={currentSize} 
                onChange={handleInputChange} />
            <button onClick={handleReset} >Reset</button>
        </div>
    )

}

export default CounterGroupGenerator