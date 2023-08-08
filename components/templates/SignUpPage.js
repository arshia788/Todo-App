import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router= useRouter();

    const signUpHandler=async()=>{
        const res= await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        console.log(data);
    if(data.status === 'success') return router.replace('/signin')
    }

    return (
        <div >

            <div className='bg-white w-2/12 mx-auto rounded-lg 
             p-5 flex flex-col text-center my-10'>

                <h3 className='text-md mb-3 font-semibold'>Registrantion From</h3>
                <input onChange={e=> setEmail(e.target.value)} className='shadow-md shadow-gray-400 my-2 p-2 rounded' type='text' placeholder='email' value={email} />
                <input onChange={e=> setPassword(e.target.value)} className='shadow-md shadow-gray-400 my-2 p-2 rounded' type='password' placeholder='password...' value={password} />
                
                <button
                onClick={signUpHandler}
                    className='px-3 w-fit mt-4 mx-auto py-1 rounded bg-zinc-400'
                >Register</button>

                <div className='flex items-center mt-4'>
                    <span >Have an account?</span>
                    <Link href="/signin" className='text-blue-600 col-span-2'>sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage