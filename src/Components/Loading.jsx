import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className=' flex justify-center items-center min-h-screen'>

            <RotatingLines
                visible={true}
                height="52"
                width="52"
                color="black"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    );
};

export default Loading;