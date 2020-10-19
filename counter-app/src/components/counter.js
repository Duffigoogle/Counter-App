import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

const Counter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0);
    };

    return (
        <div className='Counter-brand'>
                <h1 className='text'>{value}</h1>
            <div className='btn-brand'>
                <Button variant="primary" size='lg' block onClick={() => setValue(value - 1)}> Decrement</Button>{' '}
                <Button variant="success" size='lg' block onClick={() => setValue(value + 1)}> Increment</Button>{' '}
                <Button variant="warning" size='lg' block onClick={reset}> Reset</Button>{' '}
            </div>
        </div>
    )

}

export default Counter;

