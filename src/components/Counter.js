import React from 'react'
import { useState } from 'react'

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default Counter