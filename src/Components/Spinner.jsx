import React from 'react';
import loading from '../Assets/loadingIcon.gif';


const Spinner = () => {
    return (
        <div className='flex flex-1 justify-center items-center self-center h-[90vh] w-[90vw]'>
            <img src={loading} alt="loading" />
        </div>
    )
  }

export default Spinner;