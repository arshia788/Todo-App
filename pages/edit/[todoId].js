import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

function TodoId() {

    const [data, setData]= useState([]);
    console.log(data);
    
    const router= useRouter();
    const {query:{todoId}, isReady }= router;

    useEffect(()=>{

        if(isReady){
        fetch(`/api/edit/${todoId}`)
        .then(res=> res.json())
        .then(data=> data&& data.status ==='success' && setData(data.data))  
        }
        
    },[])    


  return (
    <div>TodoId</div>
  )
}

export default TodoId;