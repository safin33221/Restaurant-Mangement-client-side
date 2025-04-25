import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Components/Loading';
import { LuChartNoAxesColumnDecreasing, LuChartNoAxesColumnIncreasing } from "react-icons/lu";
const AllFood = () => {

    const { darktheme } = useContext(authContext)
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('ascending')
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
            <div className=''>

                <div className=" flex   gap-1 md:flex-row items-center justify-center  w-full mt-5  mx-auto px-16 md:px-20">
                    <div className='flex w-full'>
                        <input onChange={(e) => setSearch(e.target.value)} className={`input w-full input-bordered  focus:outline-none flex items-center   ${darktheme && "bg-gray-700"}`} placeholder="Search Here" />
                       
                    </div>  
                    <div onClick={() => setSort(sort === 'ascending' ? 'descending' : 'ascending')}
                        className="flex w-fit    " >
                        <button className="btn bg-gray-300">
                            {
                                sort === 'ascending' ? (<>
                                    <LuChartNoAxesColumnIncreasing className='text-xl font-bold' />
                                    Low To High
                                </>) : (<>
                                    <LuChartNoAxesColumnDecreasing className='text-xl font-bold'   />
                                    High to Low
                                </>
                                )
                            }
                        </button>
                        {/* <select onChange={(e) => setSort(e.target.value)} className="border mr-5 select-xl  rounded-full   " name="" id="">

                            <option value="ascending">Low to High </option>
                            <option value="dscending">High to Low </option>
                        </select> */}

                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-4 w-11/12 mx-auto my-10'>
                    {
                        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllFood;