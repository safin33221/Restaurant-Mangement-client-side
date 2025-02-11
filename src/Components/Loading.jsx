import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className=' flex justify-center items-center min-h-screen'>

            <ImSpinner9 className='animate-spin mx-auto text-6xl' />

        </div>
    );
};

export default Loading;