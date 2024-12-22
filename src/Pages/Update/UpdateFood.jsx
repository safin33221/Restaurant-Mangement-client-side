import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateFood = () => {
    const { user } = useContext(authContext)
    const { id } = useParams()
    const [food, setFood] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])
    console.log(food);
    const handleUpdate = (e, id) => {
        e.preventDefault()
        console.log(id);
        const data = new FormData(e.target)

        const formData = Object.fromEntries(data.entries())


        console.log(formData);
        axios.put(`http://localhost:8080/foods/${id}`, formData)
            .then(res => {
                toast.success(' Update complete! Changes have been saved successfully.')
                navigate('/myFoods')
            })

    }
    return (
        <div>
            <form onSubmit={(e) => handleUpdate(e, food._id)} className=" w-11/12 md:w-8/12 mx-auto p-3 bg-white shadow-lg rounded-lg space-y-4 py-7 my-3 border-2">
                <h2 className="text-2xl font-semibold text-center text-green-500">Update Foods</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg text-gray-700">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            required
                            defaultValue={food?.foodName}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col ">
                        <label className="text-lg text-gray-700">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            required
                            defaultValue={food.foodImage}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Food Category</label>
                        <input
                            type="text"
                            name="foodCategory"
                            required
                            defaultValue={food.foodCategory}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            required
                            defaultValue={food.quantity}
                            min="1"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            defaultValue={food.price}
                            step="0.01"
                            min="0"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Food Origin (Country)</label>
                        <input
                            type="text"
                            name="foodOrigin"
                            required
                            defaultValue={food.foodOrigin}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="flex flex-col col-span-12">
                        <label className="text-lg text-gray-700">Short Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            required
                            defaultValue={food.description}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="flex flex-col col-span-12 space-y-2">
                        <label className="text-lg text-gray-700">Added By</label>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name='name'
                                value={user?.displayName}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-100"
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

export default UpdateFood;