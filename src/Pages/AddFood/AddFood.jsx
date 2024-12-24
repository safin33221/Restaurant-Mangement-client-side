import React, { useContext } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';



const AddFood = () => {
    const { user, darktheme } = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)

        const formData = Object.fromEntries(data.entries())
        formData.quantity = parseInt(formData.quantity)
        formData.Purchase_count = 0;

        console.log(formData);
        axiosSecure.post('/foods', formData)
            .then(res => {
                console.log(res.data);
                e.target.reset()
                toast.success(' Success! Your item has been added successfully')

            })


    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={` w-11/12 md:w-8/12 mx-auto shadow-2xl rounded-lg space-y-4 py-7 p-5  my-10    ${darktheme && "bg-gray-800 border border-gray-900 "}`}>
                <h2 className="text-2xl font-semibold text-center text-green-500">Add Food Item</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            required
                            className={`input input-bordered  focus:outline-none flex items-center focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Food Name'
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col ">
                        <label className="text-lg ">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            required
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Food Image URL'
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Category</label>
                        <input
                            type="text"
                            name="foodCategory"
                            required
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Food Category'
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            required
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Quantity'
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            step="0.01"
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Price'
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Origin (Country)</label>
                        <input
                            type="text"
                            name="foodOrigin"
                            required
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Food Origin (Country)'
                        />
                    </div>

                    <div className="flex flex-col col-span-12">
                        <label className="text-lg ">Short Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            required
                            className={`input input-bordered focus:ring-1 focus:ring-green-200   focus:outline-none flex items-center gap-2 ${darktheme && "bg-gray-700"}`}
                            placeholder='Short Description'
                        />
                    </div>

                    <div className="flex flex-col col-span-12 space-y-2">
                        <label className="text-lg ">Added By</label>
                        <div className="flex gap-4 flex-col md:flex-row">
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
                                p
                            // className="p-3 border  bg-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    className="btn  w-full block bg-green-400 hover:bg-green-500 font-bold  text-xl"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;