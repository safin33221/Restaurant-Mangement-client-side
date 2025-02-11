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
           
            if (error.status === 401 || error.status === 403) {
                
                singOutUser()
                    .then(res => {
                        
                        navigate('/login')
                    })
                    .catch(error => {
                        
                    })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;