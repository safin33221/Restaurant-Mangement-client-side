import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const FoodCard = ({ food }) => {
    const { darktheme } = useContext(authContext)
    return (
        <div className={`w-11/12 md:w-full mx-auto     focus:border-green-600 rounded-xl overflow-hidden hover:shadow-2xl  hover:scale-[1.03] transition-all  duration-300  shadow-2xl  ${darktheme && 'bg-gray-800'}`}

        >
            <img
                src={food.foodImage}
                alt="loading"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold ">{food.foodName}</h3>
                <p className="text-sm  mt-1">{food.foodCategory}</p>
                {/* <p className="mt-3 text-sm text-gray-700">{food.description}</p> */}

                <div className="mt-2 flex items-center justify-between ">
                    
                    <span className="text-sm ">Price: {food.price}</span>
                    <span className="text-sm ">Origin: {food.foodOrigin}</span>
                </div>
                <div className="mt-2 flex items-center justify-between ">
                    
                    <span className="text-sm ">Quantity: {food.quantity}</span>
                    <span className="text-sm ">Parchased : {food.Purchase_count}</span>
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