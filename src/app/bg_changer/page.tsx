"use client";

import React, { useState } from 'react';

function BgColor() {
    const [color, SetColor] = useState("olive");

    return (
        <div style={{ backgroundColor: color }} className="h-screen flex items-center justify-center">
            <button 
                onClick={() => SetColor("red")} // Update to a valid color
                className="bg-red-500 text-white px-4 py-2 rounded-sm"
            >
                Red
            </button>   
            <button 
                onClick={() => SetColor("blue")} // Another button for blue color
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
                Blue
            </button>
            <button 
                onClick={() => SetColor("olive")} // Reset back to olive color
                className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
                Olive
            </button>
        </div>
    );
}

export default BgColor;
