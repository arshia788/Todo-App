import React from 'react'

function TodoDetailPage({ data }) {
    return (
        <div className='p-1'>
            <h2 className=' text-xl font-bold'>Todo Detail Page.</h2>
            {
                data.map(item=>{
                    return(
                        <React.Fragment key={item._id}>
                        <p className='mt-4 mr-1 font-semibold'>Title: <span className='font-medium'>{item.title}</span> </p>

                        <p  className='mt-4 mr-1 font-semibold'> Status: <span className='font-medium'>{item.status}</span> </p>

                        <p  className='mt-4 mr-1 font-semibold'> Info: <span className='font-medium'>{item.info}</span> </p>

                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default TodoDetailPage