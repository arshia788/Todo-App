import { BiSolidHand } from "react-icons/bi";
import Link from 'next/link';
import { VscListSelection } from 'react-icons/vsc';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import {FiLogOut} from 'react-icons/fi'

import { useSession, signOut } from 'next-auth/react';

function Layout({ children }) {

    const { status } = useSession();

    const logOutHandler=()=>{
        signOut()
    }
    
    return (
        <div>
            <header className='bg-blue-700 pb-16 pt-4 text-white flex justify-between items-center'>
                <p className="font-semibold text-lg mb-8">Botostart Todo App</p>

                {status === 'authenticated' ?<button 
                onClick={logOutHandler}
                className="flex items-center"> <FiLogOut /> LogOut</button> :null}
            </header>

            <div className="flex justify-between">

                <aside className="bg-white  p-2 
            rounded-r-lg z-10 w-2/12 h-screen relative bottom-16">

                    <p className="flex items-center ">Welcome <BiSolidHand /></p>
                    <ul className="my-4 flex flex-col gap-y-4">
                        <li className=" gap-x-2 flex items-center text-gray-500">
                            <VscListSelection />
                            <Link href="/">Todos</Link>
                        </li>


                        <li className=" gap-x-2 flex items-center text-gray-500 ">
                            <BiMessageSquareAdd />
                            <Link href="/add-todo">Add Todo</Link>
                        </li>


                        <li className="gap-x-2 flex items-center text-gray-500">
                            <RxDashboard />
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </aside>

                <section className="w-10/12  bg-zinc-300">
                    {children}
                </section>

            </div>

            {/* <footer>
            awd
        </footer> */}

        </div>
    )
}

export default Layout