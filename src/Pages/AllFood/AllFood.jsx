import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Components/Loading';

const AllFood = () => {

    const { darktheme } = useContext(authContext)
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://restaurant-management-server-side-wheat.vercel.app/foods?search=${search}&sort=${sort}`)
            .then(res => {
                setFoods(res.data)
                setLoading(false)
            })
    }, [search, sort])
    if (loading) return <Loading />
    return (
        <div className=''>
            <Helmet><title>Master Chef || All Foods</title></Helmet>
            <div className="bg-[url('/src/assets/AllFoodBanner.png')] h-3/5    md:h-[400px] object-center  mx-auto bg-cover object-contain mb-2 flex justify-center items-center  overflow-hidden">

                <div className=' text-center w-4/5 md:w-1/2'>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>All Foods</h1>
                    <h1 className='text-[#ffc700] font-bold text-xl'>A Feast for Every Taste</h1>
                    <p className='text-[#ffc700] font-bold text-sm opacity-50 my-10'>Explore a world of culinary delights with our wide range of dishes. From appetizers to desserts, each page is a journey through flavors, ensuring there's something to satisfy every craving.</p>
                </div>
            </div>

            {/* food Card section */}
            <div>
                <h1 className='text-center font-bold text-3xl   w-fit mx-auto'>Our Food items_</h1>
                <div className="join flex flex-col-reverse gap-4 md:flex-row items-center justify-center mt-5 px-5 mx-auto">
                    <div className='flex'>
                        <input onChange={(e) => setSearch(e.target.value)} className={`input input-sm input-bordered  focus:outline-none flex items-center join-item gap-2 ${darktheme && "bg-gray-700"}`} placeholder="Search Here" />
                        <button className="btn btn-sm  rounded-r-full">Search</button>
                    </div>
                    <div className="felx mx-2" >
                        <select onChange={(e) => setSort(e.target.value)} className="border mr-5 select-sm rounded-xl  " name="" id="">

                            <option value="ascending">Low to High </option>
                            <option value="dscending">High to Low </option>
                        </select>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-11/12 mx-auto my-10'>
                    {
                        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;