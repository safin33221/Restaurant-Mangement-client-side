import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Links, useParams } from "react-router-dom";

const FoodDetails = () => {
    const { id } = useParams()
    const [food, setFood] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])
    console.log(food);
    return (
        <div className="w-10/12 grid md:grid-cols-2 grid-cols-1 mx-auto my-10 focus:border-green-600  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl  hover:scale-[1.03]  transition-all  duration-300">
            <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-80 object-cover bg-cover"
            />
            <div className="p-2 px-4">
                <h3 className="text-2xl font-bold ">{food.foodName}</h3>
                <p className="text-xl  mt-1">{food.foodCategory}</p>
                <p className="mt-1 text-sm ">{food.description}</p>

                <div className=" flex gap-2  ">
                    
                    <span className="text-lg ">Price: ${food.price} </span>
                    <span className="text-gray-500 mx-2">||</span>
                    <span className="text-lg ">Quantity: {food.quantity}</span>
                </div>

                <div className="">
                    <span className="block text-sm font-medium ">
                        <span className="font-bold">Origin:</span> {food.foodOrigin} <br />
                        <span className="font-bold">purchased:</span> {food.Purchase_count}
                    </span>
                    <span className="block text-sm font-medium  my-1">
                        <span className="font-bold">Added By:</span><br />
                        Name: {food.name}. <br />
                        Email:  {food.email}
                    </span>
                </div>
                <div>
                    <Link to={`/foodPurchase/${food._id}`}>
                        <button className="btn bg-green-400 hover:bg-green-500">Purchase </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;