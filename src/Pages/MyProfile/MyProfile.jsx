import React, { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { FaCamera, FaEdit } from 'react-icons/fa';

const MyProfile = () => {
    const { user } = useContext(authContext)
    const [isEdit, setIsEdit] = useState(false)
    const [isPhotoEdit, setIsPhotoEdit] = useState(false)
    const [name, setName] = useState(user?.displayName)
    const [photo, setPhoto] = useState(user?.photoURL)
    const [selectedPhoto, setSelectedPhoto] = useState('')

    const handlePhotoChange = (e) => {
        const file =  (e.target.files[0])
        console.log(file);
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setSelectedPhoto(reader.result)
            }
            reader.readAsDataURL(file)
            setPhoto(file)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center my-4 md:my-20 mt-20 px-3 min-h-96 relative  ">
            <Helmet><title>Master Chef || Profile</title></Helmet>

            <div className=" md:w-11/12 mx-auto  p-5 rounded-xl relative border shadow-2xl flex items-center justify-center  ">

                {/* <h1 className="text-2xl font-bold text-center mb-5">Your Profile</h1> */}

                <div className="flex gap-10 justify-center w-full   items-center mb-5 ">
                    {user ? (
                        <div className=''>


                            <div className='relative'>
                                <img
                                    src={selectedPhoto || photo}
                                    alt="User Avatar"
                                    className="w-64 h-64 rounded-full border "

                                />
                                <input
                                    type="file"
                                    className='file-input  text-3xl font-bold mt-3 hidden '
                                    id='fileInput'
                                    onChange={handlePhotoChange}

                                />
                                <FaCamera
                                    onClick={() => document.getElementById('fileInput').click()}
                                    className='absolute bottom-5 right-3 backdrop-blur-sm hover:backdrop-blur-md border p-2 rounded-full text-5xl' />
                            </div>


                        </div>
                    ) : (
                        <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                            No Photo
                        </div>
                    )}
                    <div>
                        {
                            isEdit ? (
                                <div className='border-b-2 w-fit'>
                                    <input
                                        type="text"
                                        className='  text-3xl font-bold mt-3'
                                        defaultValue={name}
                                    />
                                </div>
                            ) : (
                                <h2 className="text-3xl font-bold mt-3">{user?.displayName}</h2>
                            )
                        }
                        <p className="text-gray-500">{user?.email}</p>
                    </div>
                    <div onClick={() => setIsEdit(!isEdit)}
                        className='absolute top-4 right-5 '>
                        <button className="  text-3xl font-bold"><FaEdit /></button>
                    </div>
                </div>



            </div>

        </div >
    );
};

export default MyProfile;