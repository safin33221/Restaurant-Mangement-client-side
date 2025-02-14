import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import moment from "moment";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";


const FoodPurchase = () => {
    const { user } = useContext(authContext)
    const { id } = useParams()
    const [food, setFood] = useState({})
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(false)
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axiosSecure.get(`/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])

    const ZerofoodQuantity = parseInt(food.quantity) === 0;

    const handleParchase = e => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)
        const parchaseData = Object.fromEntries(formData.entries())
        parchaseData.quantity = parseInt(parchaseData.quantity)

        parchaseData.buying_Date = moment().format('LLL');
        parchaseData.foodImage = food.foodImage
        parchaseData.foodWoner = {
            name: food.name,
            email: food.email
        }
        parchaseData.foodId = food._id



        if (user?.email === food?.email) {
            toast.error('You cannot purchase items you’ve added yourself. Please explore other items!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
            return;
        }

        if (ZerofoodQuantity) {
            setIsDisabled(true)
            return toast.error('item is currently out of stock. Please  explore other available items!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
        }
        if (parchaseData.quantity === false) {
            return toast.error('Please enter a quantity to proceed!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
        }
        if (parchaseData.quantity > food.quantity) {
            return toast.error(`You can only purchase up to the available(${food.quantity}) quantity`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            })
        }



        axiosSecure.post('/food-parchase', parchaseData)
            .then(res => {
                setLoading(false)
                toast.success('Purchase successful! We’ll get your items ready soon.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",

                })
                navigate('/myOrders')
            })

    }

    return (
        <div className="pt-24">
            <Helmet><title>Master Chef || Food Parchase</title></Helmet>
            <form onSubmit={handleParchase} className=" w-11/12 md:w-6/12 mx-auto p-3  shadow-lg rounded-xl space-y-4 py-7 my-3 border">
                <h2 className="text-2xl font-bold text-center ">Food Purchase</h2>
                <Link to={`/food/${id}`} data-tip="Go Back">
                    <FaArrowAltCircleLeft className="text-4xl" />
                </Link>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12  flex flex-col">
                        <label className="text-lg ">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={food.foodName}
                            readOnly
                            required
                            className="p-3 border bg-transparent  rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Price</label>
                        <input

                            name="price"
                            value={food.price}
                            readOnly

                            className="p-3 border bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Quantity</label>
                        <input

                            name="quantity"
                            placeholder={` Availbale ${food.quantity}`}
                            type="number"
                            required


                            className="p-3 border bg-transparent rounded-xl focus:outline-none  focus:ring-2 focus:ring-green-200"
                        />
                    </div>





                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg ">Buyer Name</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='name'
                                value={user?.displayName || 'not found'}
                                readOnly
                                className="p-3 border bg-transparent rounded-xl focus:outline-none w-full focus:ring-2 focus:ring-green-200"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-2">
                        <label className="text-lg ">Buyer Email</label>
                        <div className="flex space-x-4">

                            <input
                                type="email"
                                name='email'
                                value={user?.email}
                                readOnly
                                className="p-3 border bg-transparent rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    disabled={isDisabled}
                    className="btn btn-outline  px-20  hover:bg-gray-100 hover:text-black  text-xl"
                >
                    {
                        loading ? <ImSpinner9 className='animate-spin mx-auto' /> : "Purchase"
                    }

                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;