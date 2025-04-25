import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const FoodCard = ({ food }) => {
    const { darktheme } = useContext(authContext)
    return (
        <div className={`w-full md:w-full mx-auto border relative  min-h-[250px] pb-10 focus:border-green-600  overflow-hidden hover:shadow-2xl  hover:scale-[1.03] transition-all  duration-300  shadow-2xl rounded-xl ${darktheme && 'bg-gray-800'}`}

        >
            <img
                src={food.foodImage}
                alt="loading"
                className="w-full h-48 object-center bg-center"
            />
            <div className="p-4 ">
                <h3 className="text-sm md:text-lg font-bold ">{food.foodName}</h3>
                {/* <p className="text-sm  mt-1">{food.description.slice(0, 50)}...</p> */}
                {/* <p className="mt-3 text-sm text-gray-700">{food.description}</p> */}

                <div className="mt-2 flex flex-col md:flex-row items-center justify-between ">

                    <span className=" text-xs md:text-sm  "> {food.quantity > 0  ?'Available':<p className='line-through'>Available</p>}</span>
                    <span className=" text-xs md:text-sm  font-bold text-red-500 "> {food.price} Tk</span>
                </div>




            </div>
            <Link to={`/food/${food._id}`} className='absolute  w-full px-6 '>
                <button className=" mt-2 w-full btn btn-xs md:btn-sm btn-outline hover:bg-gray-100 hover:text-black   transition duration-400 ease-in-out ">
                    See more
                </button>
            </Link>
        </div>
    );
};

export default FoodCard;