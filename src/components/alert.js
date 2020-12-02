import React from 'react';

const Alert = ({ text,type }) => {
    return (
            <div className={`alert alert-${type} mt-2`} role="alert">
                {text}
            </div>
    );
};

export default Alert;