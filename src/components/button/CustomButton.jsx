import React from 'react';
import './customButton.scss';

const CustomButton = ({type, children, ...props}) => {
    return (
        <button className={`button ${type}`} {...props}>{children}</button>
    );
};

export default CustomButton;
