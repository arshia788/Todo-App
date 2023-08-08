import RadioButton from 'components/module/RadioButton';
import React, { useState } from 'react';

import { GrAddCircle } from 'react-icons/gr';
import { BsAlignStart } from 'react-icons/bs';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdDoneAll } from 'react-icons/md';

function AddTodoPage() {

    const [title, setTitle] = useState('');

    const [status, setStatus] = useState('todo')


    return (
        <div className='p-2'>
            <h2 className='text-lg flex items-center gap-x-2'>
                <GrAddCircle />
                Add New Todo
            </h2>

            <div className='mt-8'>

                <div className='flex flex-col items-start mb-8'>
                    <label htmlFor='title' className='mb-2 text-gray-600 font-medium'>Title:</label>
                    <input
                        className='rounded p-1 outline-none w-80' id='title'
                        onChange={e => setTitle(e.target.value)}
                        value={title} placeholder='Title...' />
                </div>

                <div className='flex flex-col gap-y-4 
                list-disc [&>*:nth-child(1)]:bg-orange-600
                 [&>*:nth-child(2)]:bg-emerald-500
                 [&>*:nth-child(3)]:bg-indigo-600
                 [&>*:nth-child(4)]:bg-cyan-600 
                '>
                    
                    <RadioButton status={status} setStatus={setStatus}
                        value="todo" title="Todo" >
                        <BsAlignStart />
                    </RadioButton>

                    <RadioButton status={status} setStatus={setStatus}
                        value="inprogress" title="In Progress" a='1'>
                        <FiSettings />
                    </RadioButton>

                    <RadioButton status={status} setStatus={setStatus}
                        value="review" title="Review" b='2'>
                        <AiOutlineFileSearch />
                    </RadioButton>

                    <RadioButton status={status} setStatus={setStatus}
                        value="done" title="Done" c='3'>
                        <MdDoneAll />
                    </RadioButton>

                </div>

            </div>

        </div>
    )
}

export default AddTodoPage