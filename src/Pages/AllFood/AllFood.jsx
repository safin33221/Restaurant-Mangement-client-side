import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AllFood = () => {
    const {darktheme} = useContext(authContext)
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    console.log(search);
    useEffect(() => {
        axios.get(`https://restaurant-management-server-side-wheat.vercel.app/foods?search=${search}`)
            .then(res => {
                setFoods(res.data)
            })
    }, [search])
    return (
        <div>
            <Helmet><title>Master Chef || All Foods</title></Helmet>
            <div className="bg-[url('/src/assets/AllFoodBanner.png')] h-3/5    md:h-[300px] object-center  mx-auto bg-cover object-contain mb-2 flex justify-center items-center  overflow-hidden">

                <div className=' text-center w-4/5 md:w-1/2'>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>All Foods</h1>
                    <h1 className='text-[#ffc700] font-bold text-xl'>A Feast for Every Taste</h1>
                    <p className='text-[#ffc700] font-bold text-sm opacity-50 my-10'>Explore a world of culinary delights with our wide range of dishes. From appetizers to desserts, each page is a journey through flavors, ensuring there's something to satisfy every craving.</p>
                </div>
            </div>

            {/* food Card section */}
            <div>
                <h1 className='text-center font-bold text-3xl   w-fit mx-auto'>Our Food items_</h1>
                <div className="join flex items-center justify-center mt-5">
                    <input onChange={(e) => setSearch(e.target.value)} className={`input input-bordered  focus:outline-none flex items-center join-item focus:ring-1 focus:ring-green-200 gap-2 ${darktheme && "bg-gray-700"}`} placeholder="Search Here" />
                    <button className="btn join-item bg-green-400 hover:bg-green-600 rounded-r-full">Search</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                    {
                        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;