import React, { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { FaCamera, FaEdit } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify'
import { imageUpload } from '../../Api/Utils/imageHost';
const MyProfile = () => {
    const { user } = useContext(authContext)
    const [isEdit, setIsEdit] = useState(false)
    const [isPhotoEdit, setIsPhotoEdit] = useState(false)
    const [name, setName] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const handlePhotoChange = (e) => {
        const file = (e.target.files[0])
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
    const handleChangeName = async () => {
        await updateProfile(user, { displayName: name, photoURL: user?.photoURL })
        toast.success('Updated Name !!')
        setIsEdit(!isEdit)
    }
    const handleChangePhoto = async () => {
        const photoUrl = await imageUpload(photo) 
        await updateProfile(user, { displayName: user?.displayName, photoURL: photoUrl })
        setSelectedPhoto(null)
        toast.success('Updated Photo !!')
    }
    return (
        <div className="flex flex-col items-center justify-center my-4 md:my-20 mt-20 px-3 min-h-96 relative  ">
            <Helmet><title>Master Chef || Profile</title></Helmet>

            <div className=" w-full px-20 md:w-7/12 mx-auto  p-5 rounded-xl  border shadow-2xl flex items-center justify-center  ">

                {/* <h1 className="text-2xl font-bold text-center mb-5">Your Profile</h1> */}

                <div className="md:flex  gap-10 justify-center w-full   items-center mb-5 ">
                    {user ? (
                        <div className=''>


                            <div className='relative'>
                                <img
                                    src={selectedPhoto || user?.photoURL}
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
                                    className='absolute bottom-5 md:right-3 right-20 backdrop-blur-sm hover:backdrop-blur-md border p-2 rounded-full text-5xl' />
                            </div>
                            {
                                selectedPhoto && (
                                    <div className='mt-10'>
                                        <button
                                            onClick={() => setSelectedPhoto(null)}
                                            className='btn gap-3 rounded-none border-2 bg-gray-300 w-44'>Cancel</button>
                                        <button 
                                        onClick={handleChangePhoto}
                                        className='btn gap-3 rounded-none border-2 bg-gray-300 w-44'>Save</button>
                                    </div>
                                )
                            }


                        </div>
                    ) : (
                        <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                            No Photo
                        </div>
                    )}
                    <div className='relative w-64'>
                        {
                            isEdit ? (
                                <div className='border-b-2 border-black w-fit '>
                                    <input
                                        type="text"
                                        className='focus:border-none focus:outline-none w-64  text-3xl font-bold mt-3'
                                        defaultValue={user?.displayName}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>
                            ) : (
                                <h2 className="text-3xl font-bold mt-3">{user?.displayName}</h2>
                            )
                        }
                        <p className="text-gray-500">{user?.email}</p>
                        <div className='flex'>
                            {
                                isEdit ? (



                                    (
                                        <div className='flex absolute top-24 -right-16 '>
                                            <button
                                                onClick={() => {
                                                    setName(null)
                                                    setIsEdit(false)
                                                }
                                                }
                                                className='btn gap-3 rounded-none border-2 bg-gray-300 w-44'>Cancel</button>
                                            <button
                                                onClick={handleChangeName}
                                                className='btn gap-3 rounded-none border-2 bg-gray-300 w-44'>Save</button>
                                        </div>)




                                ) :
                                    (<div onClick={() => setIsEdit(!isEdit)}
                                        className='absolute top-4 -right-10'>
                                        <button className="  text-3xl font-bold"><FaEdit /></button>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>



            </div>

        </div >
    );
};

export default MyProfile;