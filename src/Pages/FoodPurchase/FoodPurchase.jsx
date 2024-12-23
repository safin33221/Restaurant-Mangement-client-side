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
    const [isDisabled, setIsDisabled] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8080/food/${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id])

    const ZerofoodQuantity = parseInt(food.quantity) === 0;

    const handleParchase = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const parchaseData = Object.fromEntries(formData.entries())



        if (user?.email === food?.email) {
            toast.error('You cannot purchase items you’ve added yourself. Please explore other items!')
            return;
        }

        if (ZerofoodQuantity) {
            setIsDisabled(true)
            return toast.error('item is currently out of stock. Please  explore other available items!"')
        }
        if(parchaseData.quantity === false){
            return toast.error('Please enter a quantity to proceed!')
        }
        if (parchaseData.quantity > food.quantity) {
            return toast.error(`You can only purchase up to the available(${food.quantity}) quantity`)
        }

        parchaseData.buying_Date = moment().format('LLL');
        console.log(parchaseData);
        axios.post('http://localhost:8080/food-parchase', parchaseData)
            .then(res => {
                console.log(res.data);
                toast.success('Purchase successful! We’ll get your items ready soon.')
                navigate('/myOrders')
            })

    }

    return (
        <div>
            <form onSubmit={handleParchase} className=" w-11/12 md:w-6/12 mx-auto p-3  shadow-lg rounded-lg space-y-4 py-7 my-3 border-2">
                <h2 className="text-2xl font-semibold text-center text-green-500">Food Purchase</h2>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12  flex flex-col">
                        <label className="text-lg ">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={food.foodName}
                            readOnly
                            required
                            className="p-3 border bg-transparent  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Price</label>
                        <input

                            name="price"
                            value={food.price}
                            readOnly

                            className="p-3 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label className="text-lg ">Quantity</label>
                        <input

                            name="quantity"
                            placeholder={` Availbale ${food.quantity}`}
                            type="number"
                            

                            className="p-3 border bg-transparent rounded-lg focus:outline-none  focus:ring-2 focus:ring-green-200"
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
                                className="p-3 border bg-transparent rounded-lg focus:outline-none w-full focus:ring-2 focus:ring-green-200"
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
                                className="p-3 border bg-transparent rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                            />
                        </div>
                    </div>



                </div>
                <button
                    type="submit"
                    disabled={isDisabled}
                    className="btn btn-outline  w-full block bg-green-400 hover:bg-green-500  hover:text-black text-xl"
                >
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;