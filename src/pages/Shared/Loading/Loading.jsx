import React from 'react';
import loading from '../../../assets/images/loading.gif'
const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <img className='w-50 h-50' src={loading} alt="" />
        </div>
    );
};

export default Loading;