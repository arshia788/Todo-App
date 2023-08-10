import HomePage from 'components/templates/HomePage'
import {useSession} from 'next-auth/react'

export default function index() {

  return (
    <div>
      <HomePage />
    </div>
  )
}

 