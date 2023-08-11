import { RiMastodonLine } from 'react-icons/ri';
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi';


function Tasks({ data, next, back, fetchTodos }) {

  console.log(data);



  const changeStatus=async(id,status)=>{

    const res= await fetch('/api/todos',{
      method:"PATCH",

      // dalil in ke dareh taghir mikoneh in hast ke miad status ro mifresteh. 
      // ? hala in status ya next hast ya back.
      
      // * in next, back ro to be onvan props az HomePage gerfti ke onja moskhash kardreh koja bereh. 
      
      body:JSON.stringify({id,status}),
      headers:{"Content-Type":'application/json'}
    })
    const data= await res.json()
    if(data.status === 'success') fetchTodos()
  }

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

              {
                back ? <button 
                onClick={()=>changeStatus(item._id, back)}
                className='bg-yellow-300 rounded px-2 flex items-center'> <BiLeftArrow /> Back</button>:null
              }

              {
                next ? <button

                // 2vomi on status hast ke mikhay taghir bedi 
                onClick={()=>changeStatus(item._id, next)}
                className='bg-green-400 text-white rounded px-2 flex items-center'><BiRightArrow /> Next</button>:null
              }

          </div>
        </div>
      ))}

    </div>
  )

}

export default Tasks