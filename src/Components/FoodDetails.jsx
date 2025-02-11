import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleLeft } from "react-icons/fa";
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

    return (
        <div className="w-10/12 grid md:grid-cols-2 grid-cols-1 mx-auto my-10 mt-24 focus:border-green-600  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl  hover:scale-[1.01]  transition-all  duration-300">
            <Helmet><title>Master Chef || Food Details</title></Helmet>
            <div className="relative">
                <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-full h-96  bg-contain object--cover"
                />
                <Link to={`/allFoods`} data-tip="Go Back" className="absolute top-3 left-4">
                    <FaArrowAltCircleLeft className="text-4xl" />
                </Link>
            </div>
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
                        <button className="btn btn-outline hover:bg-gray-100 hover:text-black ">Purchase </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;