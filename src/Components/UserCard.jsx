import React, { useState } from 'react';
import Modal from './Modal';

const UserCard = ({ myUsers: { id, name, email, phone, website } }) => {
    const [heart, setHeart] = useState(false);
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const handleHeart = () => {
        setHeart(!heart);
    }
    return (
        <div key={id} className="flex flex-col xl:w-72 lg:w-60 my-2 border-2 border-gray-200 rounded-md">
            <div className='flex flex-row justify-center items-center content-center w-full bg-slate-200'>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                    className="w-44 bg-slate-200 pt-5"
                    alt={id}></img>
            </div>
            <div className='flex flex-col p-4 space-y-2'>
                <h2 className='font-bold'>{name}</h2>
                <div className='inline-flex justify-start items-center space-x-2'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    </span>
                    <h3 className='text-sm'>{email}</h3>
                </div>

                <div className='inline-flex justify-start items-center space-x-2'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    </span>
                    <h3 className='text-sm'>{phone}</h3>
                </div>

                <div className='inline-flex justify-start items-center space-x-2'>
                    <span><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    </span></span>
                    <h3 className='text-sm'>{website}</h3>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center bg-slate-200 p-4 xl:px-12 lg:px-6 md:px-10 xs:px-8'>
                <span onClick={handleHeart} className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={heart ? "red" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </span>
                <span className='cursor-pointer border-x-2 border-gray-400 xl:px-8 lg:px-6 md:px-8 sm:px-6 xs:px-6'>
                    <svg onClick={handleModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </span>
            </div>
            <div className=''>
                {
                    modal === true ? (
                    <div className='bg-white'>
                        <Modal modal={setModal}
                            name={name}
                            email={email}
                            phone={phone}
                            website={website}
                        />
                    </div>) : ""
                }
            </div>

        </div >
    )
}

export default UserCard