import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const FoodCard = ({ food }) => {
    const { darktheme } = useContext(authContext)
    return (
        <div className={`w-11/12 md:w-full mx-auto border relative  min-h-96   focus:border-green-600  overflow-hidden hover:shadow-2xl  hover:scale-[1.03] transition-all  duration-300  shadow-2xl  ${darktheme && 'bg-gray-800'}`}

        >
            <img
                src={food.foodImage}
                alt="loading"
                className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
                <h3 className="text-lg font-bold ">{food.foodName}</h3>
                <p className="text-sm  mt-1">{food.description.slice(0, 50)}...</p>
                {/* <p className="mt-3 text-sm text-gray-700">{food.description}</p> */}

                <div className="mt-2 flex items-center justify-between ">

                    <span className="text-sm ">Price: {food.price} Tk</span>
                    <span className="text-sm ">Origin: {food.foodOrigin}</span>
                </div>




            </div>
            <Link to={`/food/${food._id}`} className='absolute bottom-2 w-full px-4'>
                <button className=" mt-5 w-full btn btn-outline hover:bg-gray-100 hover:text-black   transition duration-400 ease-in-out">
                    See more
                </button>
            </Link>
        </div>
    );
};

export default FoodCard;