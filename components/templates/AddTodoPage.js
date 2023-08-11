import RadioButton from 'components/module/RadioButton';
import React, { useState } from 'react';

import { GrAddCircle } from 'react-icons/gr';
import { BsAlignStart } from 'react-icons/bs';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdDoneAll } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('todo');
    const [info, setInfo]= useState('');


    const addHandler=async()=>{
        const res= await fetch('/api/todos',{
            method:"POST",
            body:JSON.stringify({title, status, info}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        if(data.status==='success'){
            setTitle('')
            setInfo('')
            setStatus('todo');
            toast.success("Todo Added")
        }

    }

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
                    
                    <textarea 
                    className='mt-4 rounded p-1 outline-none border-none'
                    placeholder='Write your thoughts '
                    rows="7" cols="35"
                    value={info} onChange={e=> setInfo(e.target.value)}
                    >

                    </textarea>
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

                <button
                onClick={addHandler}
                className='rounded px-2 text-gray-700 mt-4 bg-gray-400'
                >Add</button>
            </div>
            
            <ToastContainer />

        </div>
    )
}

export default AddTodoPage