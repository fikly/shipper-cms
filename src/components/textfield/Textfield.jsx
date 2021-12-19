import React from 'react';
import './textfield.scss';

const Textfield = ({icon, ...props}) => {
    return (
        <div className={`textfield ${icon ? 'has-icon' : ''}`}>
            {icon}
            <input type="text" {...props} />
        </div>
    );
};

export default Textfield;