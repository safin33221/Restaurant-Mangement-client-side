import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: 'https://restaurant-management-server-side-wheat.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { singOutUser } = useContext(authContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log('error caught in interceptor', error);
            if (error.status === 401 || error.status === 403) {
                console.log('need to logOut');
                singOutUser()
                    .then(res => {
                        console.log("log out user");
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;