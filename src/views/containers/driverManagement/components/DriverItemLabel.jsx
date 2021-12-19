import React from 'react';

const DriverItemLabel = ({label, value}) => {
    return (
        <div className="item-label">
            <h6 className="color-grey font-400">{label}</h6>
            <h5 className="font-400">{value}</h5>
        </div>
    );
};

export default DriverItemLabel;
