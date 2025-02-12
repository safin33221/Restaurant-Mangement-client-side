import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Loading from "../../Components/Loading";

const MyFoods = () => {
    const { user } = useContext(authContext)
    const axisoSecure = useAxiosSecure()
    const [myFoods, setMyFoods] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axisoSecure.get(`/my-foods/${user?.email}`)
            .then(res => {
                setMyFoods(res.data)
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
                axisoSecure.delete(`/foods/${id}`)
                    .then(() => {
                        
                        const remaining = myFoods.filter(food => food._id !== id)
                        setMyFoods(remaining)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });

    }
    if(loading) return <Loading/>
    return (
        <div className="min-h-[300px] mt-24">
            <Helmet><title>Master Chef || My Foods</title></Helmet>
            {
                myFoods.length === 0 ?
                    <div className='font-bold text-center my-10 text-3xl'>
                        <h1>Oops! The menu is empty.</h1>
                    </div>

                    :
                    <div className='flex flex-col mt-6 w-11/12 mx-auto my-5 '>
                        <h1 className="font-bold text-xl">My Foods Collection:  {myFoods.length}</h1>
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
                                                    Quentity
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                >
                                                    Origin
                                                </th>

                                                <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className=' divide-y divide-gray-200 '>

                                            {
                                                myFoods.map(food => <tr key={food._id} >
                                                    <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                        <img src={food.foodImage} className="w-20 h-16 rounded-lg" alt="" />
                                                    </td>

                                                    <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                        {food.foodName}
                                                    </td>

                                                    <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                        {food.price}
                                                    </td>
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className={`px-3 py-1   text-sm  rounded-full`}
                                                            >
                                                                {food.quantity}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                        {food.foodOrigin}
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

                                                            <Link
                                                                to={`/upadate-food/${food._id}`}
                                                                className=' transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                                                            >
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
                                                                        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                    />
                                                                </svg>
                                                            </Link>
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

        </div >
    );
};

export default MyFoods;