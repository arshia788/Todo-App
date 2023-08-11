import HomePage from 'components/templates/HomePage'
import {getSession} from 'next-auth/react'

export default function index() {

  return (
    <div>
      <HomePage />
    </div>
  )
}

export async function getServerSideProps({req}){

  const session= await getSession({req})

  if(!session){
    return{
      redirect:{destination:'/signin', permanent:false}
    }
  }

  return{
    props:{}
  }
}

 