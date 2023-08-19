import { RiMastodonLine } from 'react-icons/ri';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { FaPenFancy } from "react-icons/fa";
import Link from 'next/link';
import { useSession } from 'next-auth/react'

function Tasks({ Data, next, back, fetchTodos }) {



  const changeStatus = async (id, status) => {

    const res = await fetch('/api/todos', {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": 'application/json' }
    })
    const data = await res.json()
    if (data.status === 'success') fetchTodos()
  }

  return (
    <div className='mb-2 relative'>

      {Data?.map((item, index) => (
        <div key={item._id} className=' bg-white mt-12 p-2 shadow-md shadow-gray-500'>

          <div className='flex items-center justify-between mb-4 mt-2'>
            <Link href={`/todoDetail/${item._id}`}
              className='absolute right-1 cursor-pointer bg-pink-600 rounded px-2 py-0.5 text-white'>
              Detail
            </Link>

            <Link href={`/edit/${item._id}`}>
              <FaPenFancy />
            </Link>
          </div>

          <p className={`${item.status === 'todo' ? `h-1 bg-orange-500 w-1/3 rounded` : null}`}></p>
          <p className={`${item.status === 'inprogress' ? `h-1 bg-blue-500 w-1/3 rounded` : null}`}></p>
          <p className={`${item.status === 'review' ? `h-1 bg-yellow-500 w-1/3 rounded` : null}`}></p>
          <p className={`${item.status === 'done' ? `h-1 bg-pink-500 w-1/3 rounded` : null}`}></p>


          <div className='flex items-center'>
            <RiMastodonLine className='mt-0.5 mr-1'/>
            <p>{item.title}</p>
          </div>

          <div className='flex justify-between items-center my-3'>

            {
              back ? <button
                onClick={() => changeStatus(item._id, back)}
                className='bg-yellow-300 rounded px-2 flex items-center'> <BiLeftArrow /> Back</button> : null
            }

            {
              next ? <button
                onClick={() => changeStatus(item._id, next)}
                className='bg-green-400 text-white rounded px-2 flex items-center'><BiRightArrow /> Next</button> : null
            }

          </div>
        </div>
      ))}

    </div>
  )

}

export default Tasks