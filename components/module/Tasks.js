import {RiMastodonLine} from 'react-icons/ri';


function Tasks({data}) {

  console.log(data);

  return(
    <div className='shadow-md shadow-gray-500 mb-2'>

        {data?.map(item=>(
            <div key={item._id} className='bg-white mt-12 p-1'>
                <p className={`h-1 rounded w-6/12 ${item.status === 'todo' && "bg-orange-500"}`}></p>
                <p className={`h-1 rounded w-6/12 ${item.status === 'inprogress' && 'bg-blue-500'}`}></p>
                <p className={`h-1 rounded w-6/12 ${item.status === 'review' && 'bg-yellow-500'}`}></p>
                <p className={`h-1 rounded w-6/12 ${item.status === 'done' && 'bg-pink-500'}`}></p>
                <RiMastodonLine />
                <h4>{item.title}</h4>
            </div>
        ))}

    </div>
  )

}

export default Tasks