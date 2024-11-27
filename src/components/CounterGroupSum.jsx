const CounterGroupSum =(props) => {
    const {counters} = props

    return (
        <span>sum: {counters.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</span>
    )
}

export default CounterGroupSum