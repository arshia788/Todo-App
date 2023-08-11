import Tasks from 'components/module/Tasks';
import React, { useEffect, useState } from 'react';

function HomePage() {

    const [todos, setTodos]= useState([]);

    useEffect(() => {
        fetchTodos()
        
    }, []);
    
    const fetchTodos=async()=>{
        const res= await fetch('/api/todos');
        const data= await res.json()
        if(data.status === 'success') setTodos(data.data.todos)
    }

    return (
        <div className='grid grid-cols-12 items-center mt-4 p-1  gap-2'>
         
            <div className='p-1 rounded col-span-3 bg-white pb-4'>
                <div className='bg-orange-500  text-center text-white rouned-md'>Todo</div>

                <Tasks data={todos.todo} fetchTodos={fetchTodos} next='inprogress'/>
                
            </div>

            <div className='p-1 rounded col-span-3 bg-white pb-4'>
                <div className='bg-blue-500 text-center text-white rouned-md'>In Progress</div>
                <Tasks data={todos.inprogress} fetchTodos={fetchTodos} next='review' back='todo'/>
            </div>

            <div className='p-1 rounded col-span-3 bg-white pb-4'>
                <div className='bg-yellow-500 text-center text-white rouned-md'>Review</div>
                <Tasks data={todos.review} fetchTodos={fetchTodos} next='done' back='inprogress'/>
            </div>

            <div className='p-1 rounded col-span-3 bg-white pb-4'>

                <div className='bg-pink-500 text-center text-white rouned-md'>Done</div>
                <Tasks data={todos.done} fetchTodos={fetchTodos} back='review'/>
            </div>

        </div>
    )
}

export default HomePage