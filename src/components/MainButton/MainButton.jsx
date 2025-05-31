import React from 'react';

const MainButton = ({children}) => {
    return (
       <button className='btn btn-primary rounded-4xl px-4 md:px-6 py-5 md:py-7 font-semibold capitalize'>
        {children}
       </button>
    );
};

export default MainButton;