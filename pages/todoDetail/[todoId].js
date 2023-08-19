import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import TodoDetailPage from 'components/templates/TodoDetailPage';

function TodoId() {

    const [data, setData]= useState([]);    
    const router= useRouter();
    const {query:{todoId}, isReady }= router;

    useEffect(()=>{

        if(isReady){
        fetch(`/api/edit/${todoId}`)
        .then(res=> res.json())
        .then(data=> data&& data.status ==='success' && setData(data.data))  
        }
        
    },[])    

    if(data)  return <TodoDetailPage data={data}/>
}

export default TodoId;