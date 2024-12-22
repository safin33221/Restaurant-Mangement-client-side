import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInWithEmailAndPass, signInWithGoogle } = useContext(authContext)
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
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                {/* login form */}
                <div className="card  max-w-sm shrink-0 shadow-2xl w-1/2">
                    <h1 className="text-3xl mt-3 font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin}
                        className="card-body">
                        <label class="input   flex items-center gap-2 ring-1 focus:ring-green-100 focus:outline-none">
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
                            <input name='email' type="text" class=" grow" placeholder="Email" />
                        </label>
                        <div className="form-control">
                            <label class="input input-bordered flex items-center gap-2">
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
                                <input name='password' type="text" class="grow" placeholder="password" />
                            </label>
                        </div>

                        <div className="form-control">
                            <p className='text-blue-600 underline'>Forget Password?</p>
                        </div>

                        <div className="form-control mt-3">
                            <button className="btn bg-green-400 hover:bg-green-500">Login</button>
                        </div>
                        <div className="form-control">
                            <label class="">
                                <button onClick={handleLoginWithGoogle} className="btn w-full  bg-green-400 hover:bg-green-500">Login With Google</button>
                            </label>
                        </div>
                        <div>
                            <p>New in this site <Link to='/register'><span className='text-red-500 underline'>Register Now</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;