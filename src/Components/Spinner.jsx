import React from 'react';
import loading from '../Assets/loadingIcon.gif';


const Spinner = () => {
    return (
        <div className='flex justify-center self-center text-center h-full w-full'>
            <img src={loading} alt="loading" />
        </div>
    )
  }

export default Spinner;