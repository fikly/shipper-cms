import React from 'react';
import './loading.scss';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};
export default Loading;
