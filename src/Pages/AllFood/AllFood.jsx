import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard';

const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    console.log(search);
    useEffect(() => {
        axios.get(`http://localhost:8080/foods?search=${search}`)
            .then(res => {
                setFoods(res.data)
            })
    }, [search])
    return (
        <div>
            <div className="bg-[url('/src/assets/AllFoodBanner.png')] min-h-screen object-center  mx-auto bg-cover object-contain mb-2 flex justify-center items-center rounded-b-lg  overflow-hidden">

                <div className=' '>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>See All Foods</h1>
                </div>
            </div>

            {/* food Card section */}
            <div>
                <h1 className='text-center font-bold text-3xl  border-b-4 border-green-500 w-fit mx-auto'>Our Food items</h1>
                <div className="join flex items-center justify-center mt-5">
                    <input onChange={(e) => setSearch(e.target.value)} className="input text-black input-bordered focus:outline-none join-item ring-green-200" placeholder="Search Here" />
                    <button className="btn join-item rounded-r-full">Search</button>
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