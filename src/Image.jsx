import React from 'react';

const Image = ({ title, src, alt }) => {
    return (
        <div className="image-container">
            <img className="image" src={src} alt={alt} />
            <div className="image-title">
                <h3>{title}</h3>
                <p>{alt}</p>
            </div>
            </div>
    );
};

export default Image;