import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)

        const formData = Object.fromEntries(data.entries())
        formData.Purchase_count = 0;

        console.log(formData);
        axios.post('http://localhost:8080/foods', formData)
            .then(res => {
                console.log(res.data);
                e.target.reset()
                toast.success(' Success! Your item has been added successfully')
                
            })


    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=" w-11/12 md:w-8/12 mx-auto p-3  shadow-lg rounded-lg space-y-4 py-7 my-3 border-2">
                <h2 className="text-2xl font-semibold text-center text-green-500">Add Food Item</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            required
                            className="p-3 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col ">
                        <label className="text-lg ">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            required
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Category</label>
                        <input
                            type="text"
                            name="foodCategory"
                            required
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            required
                            min="1"
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            step="0.01"
                            min="0"
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg ">Food Origin (Country)</label>
                        <input
                            type="text"
                            name="foodOrigin"
                            required
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="flex flex-col col-span-12">
                        <label className="text-lg ">Short Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            required
                            className="p-3 border  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="flex flex-col col-span-12 space-y-2">
                        <label className="text-lg ">Added By</label>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name='name'
                                value={user?.displayName}
                                readOnly
                                className="p-3 border  bg-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className="p-3 border  bg-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    className="btn btn-outline  w-full block hover:bg-green-200 font-bold hover:text-black text-xl"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;