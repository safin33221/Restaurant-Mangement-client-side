import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    return (
        <div className="max-w-md mx-auto  border-gray-200 border focus:border-green-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl  hover:scale-[1.03]  transition-all  duration-300">
            <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold ">{food.foodName}</h3>
                <p className="text-sm  mt-1">{food.foodCategory}</p>
                {/* <p className="mt-3 text-sm text-gray-700">{food.description}</p> */}

                <div className="mt-2 flex items-center justify-between ">
                    <span className="text-xl font-semibold">${food.price}</span>
                    <span className="text-sm ">Quantity: {food.quantity}</span>
                </div>

                <div className="mt-2">
                    <span className="block text-sm font-medium ">
                        Origin: {food.foodOrigin}
                    </span>
                    {/* <span className="block text-sm font-medium text-gray-600">
                        Added By: {food.addedBy.name} ({food.addedBy.email})
                    </span> */}
                </div>

                <Link to={`/food/${food._id}`}>
                    <button className="mt-5 w-full bg-green-400 py-2 px-4 rounded-lg hover:bg-green-500 text-black  transition duration-400 ease-in-out">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;