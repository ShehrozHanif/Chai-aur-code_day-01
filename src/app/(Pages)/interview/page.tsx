"use client"

import React, { useState } from 'react'


export default function page() {
    const [count,Setcount] = useState(0)
    const AddValue = ()=>{
        return(
            // Setcount(count+ 1),
            // Setcount(count+ 1),
            // Setcount(count+ 1),
            // Setcount(count+ 1),

            Setcount((prevCounter)=>(prevCounter+1)),
            Setcount((prevCounter)=>(prevCounter+1)),
            Setcount((prevCounter)=>(prevCounter+1)),
            Setcount((prevCounter)=>(prevCounter+1))

        )

    };
  return (
   
    <>
          <div className='flex flex-col items-center'>
            <h1 className=' py-16 text-5xl font-bold'>Set Counter </h1>
            <h1 className='text-center py-16 text-4xl'>{count}</h1>
            
            <div className='flex space-x-4'>
                <button onClick={AddValue} className='px-4 py-2 bg-blue-500 text-white rounded'>
                    Increment
                </button>
                <button className='px-4 py-2 bg-red-500 text-white rounded'>
                    Decrement
                </button>
            </div>
        </div>
    </>
  )
}
