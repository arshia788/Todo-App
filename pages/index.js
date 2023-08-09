import React from 'react'
import {useSession} from 'next-auth/react'

export default function index() {

  const {data} = useSession()
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

 