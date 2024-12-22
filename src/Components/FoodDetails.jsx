import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Links, useParams } from "react-router-dom";

const FoodDetails = () => {
    const { id } = useParams()
    const [food, setFood] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])
    console.log(food);
    return (
        <div className="w-10/12 grid md:grid-cols-2 grid-cols-1 mx-auto my-10 focus:border-green-600 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl  hover:scale-[1.03]  transition-all  duration-300">
            <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-80 object-cover bg-cover"
            />
            <div className="p-2 px-4">
                <h3 className="text-2xl font-bold text-gray-800">{food.foodName}</h3>
                <p className="text-xl text-gray-600 mt-1">{food.foodCategory}</p>
                <p className="mt-3 text-sm text-gray-700">{food.description}</p>

                <div className="mt-2 flex items-center gap-5 text-gray-800">
                    <span className="text-xl font-semibold">${food.price}</span>
                    <span className="text-xl text-gray-500">Qty: {food.quantity}</span>
                </div>

                <div className="my-2">
                    <span className="block text-sm font-medium text-gray-800">
                        <span className="font-bold">Origin:</span> {food.foodOrigin}
                    </span>
                    <span className="block text-sm font-medium text-gray-600 my-1">
                        <span className="font-bold">Added By:</span><br />
                        Name:{food.name} <br />
                        Email: {food.email}
                    </span>
                </div>
                <div>
                    <Link to={`/foodPurchase/${food._id}`}>
                        <button className="btn bg-green-400 hover:bg-green-500">Purchase </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;