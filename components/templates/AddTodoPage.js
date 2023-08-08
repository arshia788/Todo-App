import React, { useState } from 'react';

import {GrAddCircle} from 'react-icons/gr';
import {BsAlignStart} from 'react-icons/bs';

function AddTodoPage() {

    const [title, setTitle] = useState('');

    const [status, setStatus]= useState('todo')


    return (
        <div className='p-2'>
            <h2 className='text-lg flex items-center gap-x-2'>
                <GrAddCircle />
                Add New Todo
            </h2>

            <div className='mt-8'>

                <div className='flex flex-col items-start'>
                    <label htmlFor='title' className='mb-2 text-gray-600 font-medium'>Title:</label>
                    <input 
                    className='rounded p-1 outline-none w-80' id='title'
                    onChange={e=> setTitle(e.target.value)}
                    value={title} placeholder='Title...'/>
                </div>

                <div className='flex flex-col mt-8 gap-y-5'>

                    <div className='flex items-center gap-x-2 
                    bg-orange-400 w-fit rounded px-2 py-1 text-white'>
                        <BsAlignStart /> 
                        <label htmlFor='todo' className='mb-1'> todo</label>
                        <input 
                        type='radio' 
                        id='todo'
                        value='todo' 
                        checked={status === 'todo'}
                        onChange={e=> setStatus(e.target.value)} />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default AddTodoPage