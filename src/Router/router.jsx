import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home/Home';
import AddFood from '../PrivetRoutes/AddFood';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addFood',
                element: <AddFood />
            },
        ]
    }
])

export default router;