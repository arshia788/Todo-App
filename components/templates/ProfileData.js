import React, { useState } from 'react'

function ProfileData({ data }) {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');


  const updateProfileHandler=async()=>{
    const res= await fetch('/api/profile',{
      method:"PATCH",
      body:JSON.stringify({name, lastName, password}),
      headers:{"Content-Type":'application/json'}
    })
    const data= await res.json()
    console.log(data);
  }


  return (
    <div className='flex flex-col gap-y-4'>

      <div className="flex">
        <span className='text-gray-800 mr-1'>Name: </span>
        <p>{data.name}</p>
      </div>

      <div className="flex">
        <span className='text-gray-800 mr-1'>LastName: </span>
        <p>{data.lastName}</p>
      </div>

      <div className="flex">
        <span className='text-gray-800 mr-1'>Email: </span>
        <p>{data.email}</p>
      </div>


      <p className='mt-4 text-lg font-semibold text-blue-800'>Edit Your Profile</p>
      <div>

        <div className='flex flex-col gap-y-4 w-fit'>
          <input className='p-1 rounded' placeholder='Name...' value={name} onChange={e => setName(e.target.value)} />
          <input className='p-1 rounded' placeholder='lastName...' value={lastName} onChange={e => setLastName(e.target.value)} />
          <input className='p-1 rounded' placeholder='password...' value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <button
        onClick={updateProfileHandler}
        className='mt-6 rounded px-3 py-0.5 bg-blue-800 text-white'
        >Edit</button>
      </div>
    </div>
  )
}

export default ProfileData