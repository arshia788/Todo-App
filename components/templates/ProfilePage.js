import ProfileForm from 'components/module/ProfileForm';
import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg'

function ProfilePage() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');



    const submitHandler=(e)=>{

    }

    return (
        <div className='p-3'>

            <h2>
                <CgProfile />
                profile
            </h2>

            <div className='flex flex-col gap-y-5 mt-4'>



            <ProfileForm name={name} lastName={lastName} password={password}
            setName={setName} setLastName={setLastName} setPassword={setPassword}
            submitHandler={submitHandler}
            />

            </div>


        </div>
    )
}

export default ProfilePage