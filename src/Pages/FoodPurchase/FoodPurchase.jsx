import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";


const FoodPurchase = () => {
    const { user } = useContext(authContext)
    const { id } = useParams()
    const [food, setFood] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])
    console.log(food);

    const handleParchase = e => {

    }

    return (
        <div>
            <form onSubmit={handleParchase} className=" w-11/12 md:w-6/12 mx-auto p-3 bg-white shadow-lg rounded-lg space-y-4 py-7 my-3 border-2">
                <h2 className="text-2xl font-semibold text-center text-green-500">Food Purchase</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg text-gray-700">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            defaultValue={food.foodName}
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>



                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            defaultValue={food.quantity}
                            required
                            min="1"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none  focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col">
                        <label className="text-lg text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={food.price}
                            required
                            step="0.01"
                            min="0"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>


                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg text-gray-700">Buyer Name</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='email'
                                value={user?.displayName || 'not found'}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none w-full focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg text-gray-700">Buyer Email</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    className="btn btn-outline  w-full block bg-green-400 hover:bg-green-500  hover:text-black text-xl"
                >
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;