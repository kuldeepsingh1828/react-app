import React from 'react'
import { useLocation } from 'react-router-dom'
export default function second() {
    const { state } = useLocation();
    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}
//http://localhost:3000/profile/garima
//http://localhost:3000/profile/shristhi
//http://localhost:3000/profile/kuldeep
//http://localhost:3000/profile/kuldeep-1
//http://localhost:3000/profile/kuldeep-3
//http://localhost:3000/profile/kuldeep-5
//http://localhost:3000/profile/kuldeep-8