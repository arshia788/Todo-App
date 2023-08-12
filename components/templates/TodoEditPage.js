import React, { useState } from 'react'
import RadioButton from 'components/module/RadioButton';
import { BsAlignStart } from 'react-icons/bs';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdDoneAll } from 'react-icons/md';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoEditPage({id}) {

    console.log(id);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [status, setStatus] = useState('');

    const upadteHandler=async()=>{
        const res= await fetch(`/api/edit/${id}`,{
            method:"PATCH",
            body:JSON.stringify({title, info, status}),
            headers:{"Content-Type":'application/json'}
        });
        const data= await res.json()
        console.log(data);
        if(data.status === 'success') {
            toast.success(data.message)
        }
    }

    return (
        <div className='p-2'>

            <h2 className='font-semibold text-lg text-blue-700'>Edit Your Todo</h2>

            <div className='flex flex-col gap-y-4 w-fit mt-4'>

                <label htmlFor='title' className='text-zinc-700'>Title:</label>
                <input
                    id='title'
                    className='rounded px-6 py-1 border-none outline-none'
                    placeholder='Change your title.'
                    value={title}
                    onChange={e => setTitle(e.target.value)}

                />

                <label htmlFor='info' className='text-zinc-700'>Info:</label>
                <textarea
                    id='info'
                    className='rounded px-6 py-1 border-none outline-none'
                    placeholder='Change your info.'
                    value={info}
                    onChange={e => setInfo(e.target.value)}
                    rows="7" cols="35"
                >
                </textarea>

                <p className='text-zinc-700'>Status:</p>

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

            <button 
            onClick={upadteHandler}
            className='rounded bg-pink-700 px-2 py-1 mt-8 text-white'>Update</button>

            <ToastContainer />
        </div>
    )
}

export default TodoEditPage