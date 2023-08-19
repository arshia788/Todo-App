import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {useSession} from 'next-auth/react'

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router= useRouter();

    const {status} = useSession();


    useEffect(()=>{
        if(status === 'authenticated')  router.replace('/')

    },[status])

    const signUpHandler=async()=>{
        const res= await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
    if(data.status === 'success') return router.replace('/signin')
    }

    return (
        <div >

            <div className='bg-white w-64 mx-auto rounded-lg 
             p-5 flex flex-col text-center my-10'>

                <h3 className='text-md mb-3 font-semibold'>Registrantion From</h3>
                <input onChange={e=> setEmail(e.target.value)} className='shadow-md outline-none shadow-gray-400 my-2 p-2 rounded' type='text' placeholder='email' value={email} />
                <input onChange={e=> setPassword(e.target.value)} className='shadow-md outline-none shadow-gray-400 my-2 p-2 rounded' type='password' placeholder='password...' value={password} />
                
                <button
                onClick={signUpHandler}
                    className='px-3 w-fit mt-4 mx-auto py-1 rounded bg-zinc-400'
                >Register</button>

                <div className='flex items-center mt-4 justify-center'>
                    <span className='mr-1'>Have an account?</span>
                    <Link href="/signin" className='text-blue-600 col-span-2'>sign in</Link>
                </div> outline-none
            </div>
        </div>
    )
}

export default SignUpPage