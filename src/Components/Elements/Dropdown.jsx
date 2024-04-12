import React, { useState } from 'react';

const Dropdown = ({ children, className, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // State untuk menyimpan item yang dipilih

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        closeDropdown(); // Tutup dropdown setelah memilih
    };

    return (
        <div className="relative">
            <button type="button" className={`inline-flex ${className} justify-between w-80 justify-center h-11 items-center rounded-lg border border-abumuda bg-white text-medium leading-5 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150`} onClick={toggleDropdown}>
                <p className='font-inter text-abu ml-3'>{selectedItem || children}</p>
                {isOpen ? (
                    <img src="/images/up.png" alt="" className="ml-2 h-7 w-7" />
                ) : (
                    <img src="/images/down.png" alt="" className="ml-2 h-7 w-7" />
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-44 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option, index) => (
                            <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleItemClick(option)}>{option}</a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
