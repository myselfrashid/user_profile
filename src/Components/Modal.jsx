import React, { useState } from 'react'

const Modal = (props) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }
    if (modal) return null

    return (
        <div className='opacity-80 z-50 pt-4'>
            <form className='grid grid-flow-col md:grid-cols-3 xs:grid-cols-[0.5] h-full text-sm'>
                <div className='flex flex-col gap-y-5 text-right md:pr-5 xs:pr-2 col-span-1'>
                    <label>Name:</label>
                    <label>Email:</label>
                    <label>Phone:</label>
                    <label>Website:</label>
                </div>
                <div className='flex flex-col gap-y-5 md:col-span-2 xs:col-span-3 font-black text-sm'>
                    <input className='' type="text"
                        value={props.name} readOnly={true}></input>
                    <input type="text"
                        value={props.email} readOnly={true}></input>
                    <input type="text"
                        value={props.phone} readOnly={true}></input>
                    <input type="text"
                        value={props.website} readOnly={true}></input>
                </div>
            </form>
            <div className='flex flex-row w-full gap-4 justify-end px-2 py-4'>
                <button className='bg-none ring-2 ring-gray-400 stroke-1 xl:py-3 lg:py-2 md:py-2 xs:py-2 xl:px-3 lg:px-2 md:px-3 xs:px-3 rounded-md' onClick={handleModal}>Cancel</button>
                <button className='bg-blue-600 xl:py-3 lg:py-2 md:py-2 xs:py-2 xl:px-4 lg:px-5 md:px-6 xs:px-6 rounded-md text-white' onClick={handleModal}>OK</button>
            </div>
        </div>
    )
}

export default Modal