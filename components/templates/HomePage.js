import Tasks from 'components/module/Tasks';
import React, { useEffect, useState } from 'react';

function HomePage() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()

    }, []);

    const fetchTodos = async () => {
        const res = await fetch('/api/todos');
        const data = await res.json()
        if (data.status === 'success') setTodos(data.data.todos)
    }

    return (
        <div className='grid grid-cols-12 p-2 gap-3 h-40'>

            <div className="col-span-3 bg-white p-1">
                <div className="bg-orange-500 text-white w-full  text-center">Todo</div>
                <Tasks Data={todos.todo} next='inprogress' fetchTodos={fetchTodos} />
            </div>

            <div className="col-span-3 bg-white p-1">
                <div className="bg-blue-500 text-white w-full  text-center">inprogress</div>
                <Tasks Data={todos.inprogress} next='review' back="todo" fetchTodos={fetchTodos} />
            </div>

            <div className="col-span-3 bg-white p-1">
                <div className="bg-yellow-500 text-white w-full  text-center">Review</div>
                <Tasks Data={todos.review} next="done" back="inprogress" fetchTodos={fetchTodos} />

            </div>

            <div className="col-span-3 bg-white p-1">
                <div className="bg-pink-500 text-white w-full  text-center">Done</div>
                <Tasks Data={todos.done} back="review" fetchTodos={fetchTodos} />
            </div>

        </div>
    )
}

export default HomePage