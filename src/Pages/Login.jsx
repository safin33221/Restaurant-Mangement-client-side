import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import loginAnimation from '../assets/Lottie/login.json'
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const { signInWithEmailAndPass, signInWithGoogle, darktheme } = useContext(authContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signInWithEmailAndPass(email, password)
            .then(res => {
                console.log(res);
                toast.success(' Welcome back! Login successful.')
                navigate('/')
            })
    }
    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(data => {
                navigate('/')
            })
    }
    return (
        <div className="hero  py-3">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2 md:w-1/2 ">
                    <Lottie animationData={loginAnimation} />
                </div>

                {/* login form */}
                <div className={`   max-w-sm shrink-0 shadow-2xl w-11/12 md:w-1/2 ${darktheme && 'bg-gray-800'}`}>
                    <h1 className="text-3xl mt-3 font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin}
                        className="card-body  ">
                        <label className={`input input-bordered  focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input name='email' type="text" className=" grow " placeholder="Email" />
                        </label>
                        <div className="form-control relative">
                            <label className={`input input-bordered   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    class="h-4 w-4 opacity-70">
                                    <path
                                        fill-rule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input name='password' type={showPass ? 'text' : 'password'} class="grow " placeholder="password" />
                            </label>
                            <button type='button' className='absolute right-3 top-4' onClick={() => setShowPass(!showPass)}>{showPass ? <FaEye /> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>

                        <div className="form-control">
                            <p className='text-blue-600 underline'>Forget Password?</p>
                        </div>

                        <div className="form-control mt-3">
                            <button className="btn bg-green-400 hover:bg-green-500">Login</button>
                        </div>
                        <div className="form-control">
                            <label class="">
                                <button type='submit' onClick={handleLoginWithGoogle} className="btn w-full  bg-green-400 hover:bg-green-500">Login With Google</button>
                            </label>
                        </div>
                    </form>
                    <div className='mx-5 pb-3'>
                        <p>New in this site <Link to='/register'><span className='text-red-500 underline'>Register Now</span></Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;