import Button from "../Elements/Button";
import { useState } from 'react';
import PasswordInput from "../Elements/PasswordInput";
import Navbar from '../Fragments/Navbar'
import { Link } from "react-router-dom"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (

        <div className="flex justify-center min-h-screen items-center ">
            {/* <Navbar></Navbar> */}
            <p className='font-inter text-3xl font-semibold absolute left-10 top-10'>SIMHATIF</p>
            <div className=" h-1/2 w-1/4 absolute">
                <div className="h-1/6 w-3/4 absolute  ml-10  justify-center items-center flex-col">
                    <div className="text-center">
                        <h4 className="font-inter font-semibold text-xl">SIGN IN</h4>
                        <p className=" font-regular font-inter text-sm">Enter your NIM to sign in for this app</p>
                    </div>
                </div>
                <div className="h-3/6 w-full  mt-20">
                    <form action="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nim">
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nim"
                                type="text"
                                placeholder="NIM"
                            />
                        </div>
                    </form>
                    <form action="">
                        <PasswordInput></PasswordInput>
                        {/* <div className="mb-1">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                            </label>
                            <input
                                className="shadow appearance-none border border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                        </div> */}
                        {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                            </button>
                        </div> */}
                    </form>
                    <Link to="/HomeDosen">
                        <Button className="w-full bg-black h-8 mt-4">Sign In</Button>
                    </Link>
                </div>
                <div className="text-center">
                    <p className='font-inter text-sm font-regular text-abu'>By clicking continue, you agree to our <span className='text-black '>Terms of Service</span> and <span className='text-black'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;