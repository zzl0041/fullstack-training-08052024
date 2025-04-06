import React from "react"
import { useState, useEffect } from "react"
const FetchAPI = () =>{
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((res)=>{
            if(!res.ok) throw new Error('');
            return res.json();
        })
        .then((data)=>{
            setData(data);
            //setLoading(false);
        })
        .catch((error)=>{
            //setLoading(false);
        })
    },[]);
    return(
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default FetchAPI;