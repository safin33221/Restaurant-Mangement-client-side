import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../../Components/FoodCard';

const AllFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/foods')
            .then(res => {
                console.log(res.data);
                setFoods(res.data)
            })
    }, [])
    return (
        <div>
            <div className="bg-[url('/src/assets/AllFoodBanner.png')] min-h-screen w-11/12 mx-auto bg-cover object-contain my-2 flex justify-center items-center rounded-lg object-center overflow-hidden">

                <div className=' '>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>See All Foods</h1>
                </div>
            </div>

            {/* food Card section */}
            <div>
                <h1 className='text-center font-bold text-3xl  border-b-4 border-green-500 w-fit mx-auto'>Our Food items</h1>
                <div className='grid grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                    {
                        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;