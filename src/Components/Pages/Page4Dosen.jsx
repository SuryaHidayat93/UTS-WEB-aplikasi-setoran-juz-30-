import React from "react";
import Navbar from "../Fragments/Navbar";
import Button from "../Elements/Button";
import Statistik from "../Fragments/Statistik";
import { Link } from "react-router-dom"
const Page4Dosen = () => {
    return (
        <div className=' h-screen w-screen z-10'>
            <Navbar className={'fixed z-50'}></Navbar>
            <div className=" w-screen h-screen flex">
                <div className=" ml-0 mt-10 h-4/5 w-1/6">
                    <Link to="/SetoranMahasiswa">
                        <button >
                            <img className="ml-5" src="/images/arrowleft.png" alt="" />
                        </button>
                    </Link>
                    <div className=" w-full h-1/2">
                        <div className='bg-white w-full h-fit'>
                            <img className='ml-5' src="/images/Userbox.png" alt="" />
                        </div>
                        <div className=' flex flex-col items-center justify-center font-inter font-medium'>
                            <p>Abdul</p>
                            <p>1225011287</p>
                        </div>
                    </div>
                    <div className=' w-full h-1/3 mt-5'>
                        <div>
                            <Link to="/HomeDosen">
                                <Button className={'bg-abuabu text-black h-10 w-52 ml-2 flex items-center'}>
                                    <img className='ml-4' src="/images/home.png" alt="" />
                                    <p className='text-black ml-4 font-medium'>Home</p>
                                </Button>
                            </Link>
                            <Link to="/InputSetoran">
                                <Button className={'bg-abuabu text-black h-10 w-52 ml-2 flex items-center mt-4'}>
                                    <img className='ml-4' src="/images/input 1.png" alt="" />
                                    <p className='text-black ml-3 font-medium'>Input Setoran</p>
                                </Button>
                            </Link>
                            <Link to='/StatistikMahasiswa'>
                                <Button className={'bg-slate-400 text-black h-10 w-52 ml-2 flex items-center mt-4'}>
                                    <img className='ml-4' src="/images/Line_up.png" alt="" />
                                    <p className='text-black ml-4 font-medium'>Statistik</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Statistik></Statistik>
            </div>
        </div>
    );
}

export default Page4Dosen