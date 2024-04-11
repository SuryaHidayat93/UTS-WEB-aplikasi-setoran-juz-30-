import Navbar from '../Fragments/Navbar';
import Tabel from '../Fragments/Tabel1';
import IsiInput from "../Elements/IsiInput";
import React from 'react';

function Page1Dosen() {
    return (
        <div className=' h-screen w-screen z-10'>
            <Navbar className={'fixed z-50'}></Navbar>
            <div className=' mt-0 w-full h-32'>
                <div className=' ml-0 mt-0 h-full w-2/5'>
                    <p className='text-black font-bold font-inter ml-10 pt-8'>MAHASISWA</p>
                    <button className='w-1/2 pt-2'>
                        <div className='ml-10 w-full h-8 bg-white rounded-md flex border border-abumuda items-center '>
                            <img className='w-4 h-4 ml-1' src="/images/search.png" alt="" />
                            <input className='rounded-md h-full w-full ml-2' type="text" placeholder='Cari Nama' />
                        </div>
                    </button>
                </div>
            </div>
            <Tabel className={'ml-52 '}></Tabel>
        </div>
    );
}

export default Page1Dosen;