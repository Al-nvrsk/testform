import React from "react";
import './Bottoms.css'

const MyBotton = ({children, ...props}) => {
        
    return (
        <button  {...props} className='MyBotton'>
        {children}
        </button>
    );
}

export default MyBotton