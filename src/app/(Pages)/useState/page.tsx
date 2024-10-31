"use client";

import React, { useState } from 'react';

function UseState() {
    const [count, setCount] = useState(0);
    
    const AddValue = () => {
        if(count < 20){
            setCount(count + 1);
        }
    };

    const DecreaseValue = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className=' py-16 text-5xl font-bold'>Set Counter </h1>
            <h1 className='text-center py-16 text-4xl'>{count}</h1>
            
            <div className='flex space-x-4'>
                <button onClick={AddValue} className='px-4 py-2 bg-blue-500 text-white rounded'>
                    Increment
                </button>
                <button onClick={DecreaseValue} className='px-4 py-2 bg-red-500 text-white rounded'>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default UseState;


