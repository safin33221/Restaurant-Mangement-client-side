import axios from 'axios';
import React, {  useEffect, useState } from 'react';

import FoodCard from '../../Components/FoodCard';

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
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    foods.map(food =><FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default TopFoods;