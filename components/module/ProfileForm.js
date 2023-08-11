import React from 'react'

function ProfileForm({ name, lastName, password,
    setName, setLastName, setPassword, submitHandler }) {

    return (
        <div className='mt-4  gap-y-6'>

            <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col w-5/12 '>
                    <label htmlFor="name">Name:</label>
                    <input
                        className='rounded'
                        id="name" value={name}
                        type='text'
                        onChange={e => setName(e.target.value)} />
                </div>

                <div className='flex flex-col w-5/12  '>
                    <label htmlFor="lastName">LastName:</label>
                    <input
                        className='rounded'
                        id="lastName" value={lastName}
                        type='text'
                        onChange={e => setLastName(e.target.value)} />
                </div>

                <div className='flex flex-col w-5/12 '>
                    <label htmlFor='password' className='mb-2'>Password:</label>
                    <input
                        className='rounded'
                        id='password' value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)} />
                </div>

            </div>
            
            <button onClick={submitHandler} className='mt-6 rounded px-2 py-1 bg-gray-500 text-zinc-200'>
                Submit
            </button>
        </div>
    )
}

export default ProfileForm