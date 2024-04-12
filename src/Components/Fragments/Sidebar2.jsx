import React from 'react';

const Sidebar = ({ isVisible, className, onClose }) => {
    return (
        <div className={`sidebar ${isVisible ? 'translate-x-0' : '-translate-x-full'} ${className} transition-transform duration-300 ease-in-out border-r border-abu bg-white`} style={{ height: '100vh' }}>
            <div className='w-full h-14 items-center flex justify-center'>
                <h1 className='text-3xl font-inter text-center'>SIMHATIF</h1>
            </div>
            <button className='ml-2' onClick={onClose}>
                <img src="/images/x.png" alt="" />
            </button>
            <ul className=' ml-2 mr-2'>
                <p className='font-inter font-semibold'>MENU</p>
                <li className='font-inter'>
                    <a href="#" className='flex items-center bg-abu w-auto h-10 rounded-md'>
                        <div className='ml-2 flex items-center'>
                            <img src="/images/Line_up.png" alt="" />
                            <span className='ml-2'>Statistik</span>
                        </div>
                    </a>
                    <a href="#" className='flex items-center bg-abu w-auto h-10 rounded-md mt-3'>
                        <div className='ml-2 flex items-center'>
                            <img src="/images/File.png" alt="" />
                            <span className='ml-2'>Riwayat Hafalan</span>
                        </div>
                    </a>
                    <a href="#" className='flex items-center mt-3 bg-abu w-auto h-10 rounded-md'>
                        <div className='ml-2 flex items-center'>
                            <img src="/images/BookOpen.png" alt="" />
                            <span className='ml-2'>Daftar Hafalan</span>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
