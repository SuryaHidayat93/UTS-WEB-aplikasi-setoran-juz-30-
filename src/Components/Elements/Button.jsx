// Button.js
import React from 'react';

const Button = ({ children, className = 'bg-black' }) => {
    return (
        <button className={`text-white rounded-md font-inter ${className}`} type="submit">
            {children}
        </button>
    );
};

export default Button;
