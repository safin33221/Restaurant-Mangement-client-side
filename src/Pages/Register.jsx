import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaImages } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import Lottie from 'lottie-react';
import registerAnimation from '../assets/Lottie/register.json'
import { Helmet } from 'react-helmet-async';
import { imageUpload } from '../Api/Utils/imageHost';
import { ImSpinner9 } from 'react-icons/im';

const Register = () => {
    const { signUpWithEmailAndPass, darktheme } = useContext(authContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleRegister = async e => {
        e.preventDefault()
        setLoading(true)

        const data = new FormData(e.target)

        const formData = Object.fromEntries(data.entries())



        console.log(formData);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!formData.name || !formData.photo || !formData.email || !formData.password) {
            setLoading(false)
            return toast.error("🚨 Oops! Please fill out all the  fields to continue.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
        }
        if (!regex.test(formData.password)) {
            setLoading(false)
            return toast.error("🔒 Make sure your password is at least 6 characters long and contains an uppercase letter.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
        }
        formData.quantity = parseInt(formData.quantity)
        const image = await imageUpload(formData.photo)
        formData.photo = image
        console.log(formData);

        // const image = await imageUpload(photo.files[0])



        signUpWithEmailAndPass(formData.email, formData.password)
            .then(result => {
                setLoading(false)
                const user = result.user
                updateProfile(user, { displayName: formData.name, photoURL: formData.photo })
                e.target.reset()
                toast.success(" You're all set! Registration completed successfully.")
                navigate('/')

            })
            .catch(error => {

                if (error.code === "auth/email-already-in-use") {
                    return toast.error('Already have an account on this email !', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",

                    })
                }
            })
    }
    return (
        <div className="hero  py-3">
            <Helmet><title>Master Chef || Register</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse mt-12">
                <div className="text-center lg:text-left w-3/5 md:w-2/5">
                    <Lottie animationData={registerAnimation} />
                </div>

                {/* login form */}
                <div className={` border rounded-xl max-w-xl mx-auto    shadow-2xl `}>
                    <h1 className="text-3xl mt-3 font-bold text-center">Register now!</h1>
                    <form onSubmit={handleRegister}
                        className="card-body ">
                        {/* userName */}
                        <label className={`input input-bordered  focus:outline-none flex items-center gap-2 `}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input name='name' type="text" className="grow " placeholder="Username" />
                        </label>
                        <label className="flex flex-col w-full">
                            
                            <input
                                name="photo"
                                type="file"
                                className="file-input file-input-[#2E8B57] file-input-bordered w-full focus:outline-none"
                            />
                        </label>
                        <label className={`input input-bordered  focus:outline-none flex items-center gap-2 `}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input name='email' type="text" className="grow" placeholder="Email" />
                        </label>

                        <div className="form-control relative">
                            <label className={`input input-bordered   focus:outline-none flex items-center gap-2 `}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input name='password' type={showPass ? 'text' : 'password'} className="grow " placeholder="password" />
                            </label>
                            <button type='button' className='absolute right-3 top-4' onClick={() => setShowPass(!showPass)}>{showPass ? <FaEye /> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>



                        <div className="form-control mt-3">
                            <button className="btn ">
                                {
                                    loading ? <ImSpinner9 className='animate-spin mx-auto' /> : "Register"
                                }
                            </button>
                        </div>

                    </form>
                    <div className='mx-8 py-2'>
                        <p>Already have an Account <Link to='/login'><span className='text-red-500 underline'>Login Now</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;