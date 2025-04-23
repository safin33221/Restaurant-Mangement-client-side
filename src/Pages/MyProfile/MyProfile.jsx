import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
    const { user } = useContext(authContext)
    return (
        <div className="flex flex-col items-center justify-center my-4 md:my-20 mt-20 px-3 min-h-96 ">
            <Helmet><title>Master Chef || Profile</title></Helmet>

            <div className=" md:w-11/12 mx-auto  p-5 rounded-xl relative border shadow-2xl flex items-center justify-center  ">

                {/* <h1 className="text-2xl font-bold text-center mb-5">Your Profile</h1> */}

                <div className="flex gap-10 justify-between   items-center mb-5">
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            alt="User Avatar"
                            className="w-64 h-64 rounded-full border"
                        />
                    ) : (
                        <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                            No Photo
                        </div>
                    )}
                    <div>
                        <h2 className="text-3xl font-bold mt-3">{user?.displayName}</h2>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default MyProfile;