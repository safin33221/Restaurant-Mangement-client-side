import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { imageUpload } from '../../Api/Utils/imageHost';
import { ImSpinner9 } from "react-icons/im";

const UpdateFood = () => {
    const { user, darktheme } = useContext(authContext)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [food, setFood] = useState({})
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.get(`/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])

    const handleUpdate = async (e, id) => {
        e.preventDefault()
        setLoading(true)

        const data = new FormData(e.target)

        const formData = Object.fromEntries(data.entries())
        formData.quantity = parseInt(formData.quantity)
        const image = await imageUpload(formData.foodImage)
        formData.foodImage = image
     



        axiosSecure.put(`/foods/${id}`, formData)
            .then(res => {
                setLoading(false)
                toast.success(' Update complete! Changes have been saved successfully.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",

                })
                navigate('/myFoods')
            })

    }
    return (
        <div>
            <Helmet><title>Master Chef || Update Food</title></Helmet>
            <form onSubmit={(e) => handleUpdate(e, food._id)} className={` w-11/12 mt-24 border md:w-8/12 mx-auto shadow-2xl rounded-lg space-y-4 py-7 p-5  my-10 `}>
                <h2 className="text-2xl font-semibold text-center text-green-500">Update Foods</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            required
                            defaultValue={food?.foodName}
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col  ">
                        <label className="text-lg ">Choose Food Image </label>
                        <input
                            type="file"
                            draggable
                            name="foodImage"
                            required
                            defaultValue={food.foodImage}
                            className={` border border-gray-300 p-3 rounded-lg flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Category</label>
                        <input
                            type="text"
                            name="foodCategory"
                            required
                            defaultValue={food.foodCategory}
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            required
                            defaultValue={food.quantity}

                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            defaultValue={food.price}
                            step="0.01"
                            min="0"
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Origin (Country)</label>
                        <input
                            type="text"
                            name="foodOrigin"
                            required
                            defaultValue={food.foodOrigin}
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="flex flex-col col-span-12">
                        <label className="text-lg ">Short Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            required
                            defaultValue={food.description}
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                        />
                    </div>

                    <div className="flex flex-col col-span-12 space-y-2">
                        <label className="text-lg ">Added By</label>
                        <div className="flex flex-col md:flex-row gap-3">
                            <input
                                type="text"
                                name='name'
                                value={user?.displayName}
                                readOnly
                                className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex md:w-1/2 items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            />
                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex md:w-1/2 items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    className="btn   w-full block font-bold  text-xl"
                >
                    {
                        loading ? <ImSpinner9 className='animate-spin mx-auto' /> : "Update"
                    }
                </button>
            </form>
        </div>
    );
};

export default UpdateFood;