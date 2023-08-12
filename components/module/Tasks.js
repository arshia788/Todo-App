import { RiMastodonLine } from 'react-icons/ri';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { FaPenFancy } from "react-icons/fa";
import Link from 'next/link';

function Tasks({ data, next, back, fetchTodos }) {

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
    <div className=' mb-2'>

      {data?.map(item => (
        <div key={item._id} className='relative bg-white mt-12 p-2 shadow-md shadow-gray-500'>

          <div className='flex items-center justify-between mb-4'>
            <Link href={`/todoDetail/${item._id}`}
              className='absolute right-1 cursor-pointer'>
              Detail
            </Link>

            <Link href={`/edit/${item._id}`}>
              <FaPenFancy />
            </Link>
          </div>

          <p className={`h-1 rounded w-6/12 ${item.status === 'todo' && "bg-orange-500"}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'inprogress' && 'bg-blue-500'}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'review' && 'bg-yellow-500'}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'done' && 'bg-pink-500'}`}></p>
          <RiMastodonLine />
          <h4>{item.title}</h4>

          <div className='flex justify-between items-center'>

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