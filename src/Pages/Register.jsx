import React, { useContext } from 'react';
import { FaImages } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { signUpWithEmailAndPass, darktheme } = useContext(authContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!name || !photo || !email || !password) {
            return toast.error("🚨 Oops! Please fill out all the required fields to continue.")
        }
        if (!regex.test(password)) {
            return toast.error("🔒 Make sure your password is at least 6 characters long and contains an uppercase letter.")
        }


        signUpWithEmailAndPass(email, password)
            .then(result => {
                console.log(result);
                const user = result.user
                updateProfile(user, { displayName: name, photoURL: photo })
                form.reset()
                toast.success(" You're all set! Registration completed successfully.")
                navigate('/')

            })
    }
    return (
        <div className="hero  py-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                {/* login form */}
                <div className={`card   max-w-sm shrink-0 shadow-2xl w-11/12 md:w-1/2${darktheme && 'bg-gray-800'}`}>
                    <h1 className="text-3xl mt-3 font-bold text-center">Register now!</h1>
                    <form onSubmit={handleRegister}
                        className="card-body ">
                        {/* userName */}
                        <label className={`input input-bordered  focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input name='name' type="text" class="grow " placeholder="Username" />
                        </label>
                        <label class={`input input-bordered  focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
                            <FaImages class="h-4 w-4 opacity-70"></FaImages>
                            <input name='photo' type="text" class="grow" placeholder="Search" />
                        </label>
                        <label class={`input input-bordered  focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
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
                            <input name='email' type="text" class="grow" placeholder="Email" />
                        </label>

                        <label class={`input input-bordered  focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-600"}`}>
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
                            <input name='password' type="password" class="grow" placeholder="password" />
                        </label>



                        <div className="form-control mt-3">
                            <button className="btn bg-green-400 hover:bg-green-500">Register</button>
                        </div>

                    </form>
                    <div className='mx-8 py-3'>
                        <p>Already have an Account <Link to='/login'><span className='text-red-500 underline'>Login Now</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;