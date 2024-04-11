import React, { useState } from 'react';

const PasswordInput = ({ className }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="relative w-full">
            <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type={showPassword ? "text" : "password"}
                placeholder="Password"
            />
            <button
                className="absolute inset-y-0 right-0 mr-2"
                type="button" // tambahkan properti type="button" di sini
                onClick={togglePasswordVisibility}
            >
                {showPassword ?
                    <img src="/images/eye-open.png" alt="Eye Open" className="h-5 w-5" /> :
                    <img src="/images/eye-closed.png" alt="Eye Closed" className="h-5 w-5" />}
            </button>
        </div>
    );
};

export default PasswordInput;