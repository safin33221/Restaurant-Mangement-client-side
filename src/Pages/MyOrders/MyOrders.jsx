import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Components/Loading';


const MyOrders = () => {
    const { user } = useContext(authContext)
    const [myFoods, setFoods] = useState([])
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosSecure.get(`/parchases-food/${user?.email}`)
            .then(res => {
                setFoods(res.data);
                setLoading(false)
            })
    }, [user?.email])
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/food-parchase/${id}`)
                    .then(res => {

                        const remaining = myFoods.filter(food => food._id !== id)
                        setFoods(remaining)

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });

    }

    const total_amount = myFoods?.reduce((a, b) => a + parseInt(b.price * b.quantity), 0);
    console.log(total_amount);
    if (loading) return <Loading />
    return (
        <div className='min-h-screen pt-10 bg-gray-100'>
            <Helmet><title>Master Chef || My Orders</title></Helmet>

            <div className='grid grid-cols-12 gap-5 '>
                <div className=' col-span-12 md:col-span-7'>
                    {
                        myFoods.length === 0 ?
                            <div className='font-bold text-center text-3xl'>
                                <h1>Oops! It looks like there are no orders available at the moment. !!!</h1>
                            </div>
                            :
                            <div className='flex flex-col  w-11/12 mx-auto '>
                                {/* <h1 className="font-bold text-xl">My Orders :  {myFoods.length}</h1> */}
                                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                        <div className='overflow-hidden border border-gray-200  md:rounded-xl'>
                                            <table className='min-w-full divide-y divide-gray-200'>
                                                <thead className='font-bold'>
                                                    <tr>
                                                        <th
                                                            scope='col'
                                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            <div className='flex items-center gap-x-3'>
                                                                <span>Food Image</span>
                                                            </div>
                                                        </th>

                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            <span>Name</span>
                                                        </th>

                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            <button className='flex items-center gap-x-2'>
                                                                <span>Price</span>
                                                            </button>
                                                        </th>
                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            <button className='flex items-center gap-x-2'>
                                                                <span>Quantity</span>
                                                            </button>
                                                        </th>

                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            Buying Date
                                                        </th>
                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                        >
                                                            Food Woner
                                                        </th>

                                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                            Delete
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className=' divide-y divide-gray-200 '>

                                                    {
                                                        myFoods.map(food => <tr key={food._id} >
                                                            <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                                <img src={food.foodImage} className="w-20 h-16 rounded-lg" alt="loading" />
                                                            </td>

                                                            <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                                {food.foodName}
                                                            </td>

                                                            <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                                {food.price} $
                                                            </td>
                                                            <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                                {food.quantity}
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-2'>
                                                                    <p
                                                                        className={`px-3 py-1   text-sm  rounded-full`}
                                                                    >
                                                                        {food.buying_Date}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                                {food.foodWoner?.email}
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-6'>
                                                                    <button onClick={() => handleDelete(food._id)}
                                                                        className=' transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                        <svg
                                                                            xmlns='http://www.w3.org/2000/svg'
                                                                            fill='none'
                                                                            viewBox='0 0 24 24'
                                                                            strokeWidth='1.5'
                                                                            stroke='currentColor'
                                                                            className='w-5 h-5'
                                                                        >
                                                                            <path
                                                                                strokeLinecap='round'
                                                                                strokeLinejoin='round'
                                                                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                                            />
                                                                        </svg>
                                                                    </button>


                                                                </div>
                                                            </td>
                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
                <div className=' col-span-12 md:col-span-5  h-fit mx-auto w-10/12 '>


                    <table className="table border">
                        <thead>
                            <tr className='border-b  border-gray-500'>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>{total_amount}$</td>
                            </tr>
                            <tr className='border-b  border-gray-500'>
                                <td>Delivery Charge</td>
                                <td>40 $</td>
                            </tr>

                            <tr>
                                <td>Total</td>
                                <td> {total_amount + 40}$</td>
                            </tr>

                        </tbody>
                    </table>
                        {/* <button className='btn  w-full rounded-none bg-green-500'>Proceed to Payment</button> */}

                </div>
            </div>

        </div>
    );
};

export default MyOrders;