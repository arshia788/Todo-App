import ProfileForm from 'components/module/ProfileForm';
import React, { useEffect, useState } from 'react';
import {CgProfile} from 'react-icons/cg'
import ProfileData from './ProfileData';

function ProfilePage() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData]= useState(null);

    useEffect(()=>{
        fetchProfile()
    },[])

    const fetchProfile=async()=>{
        const res= await fetch('/api/profile')
        const data= await res.json()
        if(data.status === 'success'&& data.data.name &&data.data.lastName){
            setData(data.data)
        }  
    }

    const submitHandler= async()=>{  
        const res= await fetch('/api/profile',{
            method:"POST",
            body:JSON.stringify({name, lastName, password}),
            headers:{"Content-Type":'application/json'}
        });
        const data= await res.json()
        console.log(data);
    }

    return (
        <div className='p-3'>

            <h2 className='flex items-center'>
                <CgProfile className='mt-2 mr-1'/>
                profile
            </h2>

            <div className='flex flex-col gap-y-5 mt-4'>




            {
                data ?  <ProfileData data={data}/>:
                <ProfileForm name={name} lastName={lastName} password={password}
                setName={setName} setLastName={setLastName} setPassword={setPassword}
                submitHandler={submitHandler}
                />
            }

            </div>


        </div>
    )
}

export default ProfilePage