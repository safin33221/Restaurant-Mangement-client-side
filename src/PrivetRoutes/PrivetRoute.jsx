import React, { useContext, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;