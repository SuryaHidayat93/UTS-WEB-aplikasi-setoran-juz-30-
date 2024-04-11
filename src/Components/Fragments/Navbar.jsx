import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = ({ className }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleCloseSidebar = () => {
        setSidebarVisible(false);
    };
    return (
        <div>
            <Sidebar className={' absolute w-72 h-screen'} isVisible={sidebarVisible} onClose={handleCloseSidebar} />
            <nav className='w-full h-14 items-center flex border-b border-colorr-abu' >
                <div className='ml-2 '>
                    <button className=' min-h-14' onClick={toggleSidebar}>
                        <img src="/images/sidebar.png" alt="" />
                    </button>
                </div>
                <div className='min-w-52 min-h-10 right-0  ml-auto flex items-center'>
                    <div className='w-24 h-8 bg-black ml-3 rounded-md flex items-center justify-center'>
                        <p className='text-white font-inter'>Dosen PA</p>
                    </div>
                    <div className='w-20 h-10  ml-auto'>
                        <button className='flex items-center'>
                            <img className='object-cover w-10 h-10 rounded-full' src="/images/User.png" alt="" />
                            <img className='ml-2' src="/images/Arrow down.png" alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
