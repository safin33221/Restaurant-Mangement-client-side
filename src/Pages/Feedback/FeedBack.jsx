import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { authContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { ImSpinner9 } from 'react-icons/im';

const FeedBack = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const message = form.message.value
        const feedback = {
            name: user?.displayName,
            email: user?.email,
            message: message
        }
        axiosSecure.post('/feedback', feedback)
            .then(res => {
                setLoading(false)
                form.reset()
                toast.success('Thank you for your feedback!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",

                })
                
            })

    }
    return (
        <div className="max-w-lg mx-auto  p-6 shadow-lg  rounded-xl mt-48 mb-4 px-10 ">
            <h2 className="text-2xl font-bold text-center mb-4">
                Your Feedback Matters! ⭐
            </h2>

            <form onSubmit={handleSubmit} >


                {/* Feedback Text Area */}
                <textarea
                    className="w-full p-3 border rounded-xl focus:outline-none "
                    rows="4"
                    placeholder="Write your feedback here..."
                    name='message'

                    // onChange={(e) => setFeedback(e.target.value)}
                    required
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full mt-4 p-3 btn btn-outline hover:bg-gray-100 hover:text-black   font-bold rounded-xl transition `}
                   
                >
                    {loading ? <ImSpinner9 className='animate-spin mx-auto' /> : "Submit Feedback"}
                </button>
            </form>
        </div>
    );
};

export default FeedBack;