import axios from 'axios';
import React, { useEffect, useState } from 'react';

import FoodCard from '../../Components/FoodCard';
import { Link } from 'react-router-dom';

const TopFoods = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/top-foods')
            .then(res => {
                setFoods(res.data)
            })
    }, [])

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-8'>Our Top Selling Foods_ </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <Link to='/allFoods' className=' my-5 block'>
                <button className="btn bg-green-400 hover:bg-green-600">
                    See All Foods
                </button>
            </Link>
        </div>
    );
};

export default TopFoods;