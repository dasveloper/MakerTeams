import React from 'react';

export const Loader = ({text}) => {
    return (
        <div className="loader">
            <h1 className="loader__text">{text}</h1>
            <div className="loader__spinner"></div>
        </div>
    )
}
