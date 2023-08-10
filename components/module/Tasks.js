import { RiMastodonLine } from 'react-icons/ri';
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi';


function Tasks({ data, next, back, fetchTodos }) {


  return (
    <div className=' mb-2'>

      {data?.map(item => (
        <div key={item._id} className='bg-white mt-12 p-1 shadow-md shadow-gray-500'>
          <p className={`h-1 rounded w-6/12 ${item.status === 'todo' && "bg-orange-500"}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'inprogress' && 'bg-blue-500'}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'review' && 'bg-yellow-500'}`}></p>
          <p className={`h-1 rounded w-6/12 ${item.status === 'done' && 'bg-pink-500'}`}></p>
          <RiMastodonLine />
          <h4>{item.title}</h4>

          <div className='flex justify-between items-center'>

            {/* dari handler mikoni in dokmeh ha ro  */}
              {
                back ? <button className='bg-yellow-300 rounded px-2 flex items-center'> <BiLeftArrow /> Back</button>:null
              }

              {
                next ? <button className='bg-green-400 text-white rounded px-2 flex items-center'><BiRightArrow /> Next</button>:null
              }

          </div>
        </div>
      ))}

    </div>
  )

}

export default Tasks