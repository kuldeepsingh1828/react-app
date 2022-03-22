
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
export default function first() {
    let params = useParams();
    console.log(params);
    const data = "Your Current ID is : " + params.id;
    const navigator = useNavigate();
    const clickHandler = function () {
        navigator("/second", { state: data });
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={clickHandler}>send data</button>
        </div>
    )
}
