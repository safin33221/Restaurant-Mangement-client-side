import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import moment from "moment";
import { toast } from "react-toastify";


const FoodPurchase = () => {
    const { user } = useContext(authContext)
    const { id } = useParams()
    const [food, setFood] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])


    const handleParchase = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const parchaseData = Object.fromEntries(formData.entries())
        parchaseData.buying_Date = moment().format('L');
        console.log(parchaseData);
        axios.post('http://localhost:8080/food-parchase', parchaseData)
            .then(res => {
                console.log(res.data);
                toast.success('Purchase successful! We’ll get your items ready soon.')
                // navigate('/myOrders')
            })

    }

    return (
        <div>
            <form onSubmit={handleParchase} className=" w-11/12 md:w-6/12 mx-auto p-3 bg-white shadow-lg rounded-lg space-y-4 py-7 my-3 border-2">
                <h2 className="text-2xl font-semibold text-center text-green-500">Food Purchase</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12  flex flex-col">
                        <label className="text-lg text-gray-700">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={food.foodName}
                            readOnly
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg text-gray-700">Price</label>
                        <input

                            name="price"
                            value={food.price}
                            readOnly

                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg text-gray-700">Quantity</label>
                        <input

                            name="quantity"
                            value={food.quantity}
                            readOnly
                            required

                            className="p-3 border border-gray-300 rounded-lg focus:outline-none  focus:ring-2 focus:ring-green-100"
                        />
                    </div>





                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg text-gray-700">Buyer Name</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='name'
                                value={user?.displayName || 'not found'}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none w-full focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg text-gray-700">Buyer Email</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-100"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    className="btn btn-outline  w-full block bg-green-400 hover:bg-green-500  hover:text-black text-xl"
                >
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;