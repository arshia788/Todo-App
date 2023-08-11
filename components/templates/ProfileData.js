import React from 'react'

function ProfileData({data}) {

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
    </div>
  )
}

export default ProfileData