import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home/Home';

import AllFood from '../Pages/AllFood/AllFood';
import FoodDetails from '../Components/FoodDetails';
import FoodPurchase from '../Pages/FoodPurchase/FoodPurchase';
import Gallery from '../Pages/Gallery/Gallery';
import MyFoods from '../Pages/MyFood/MyFoods';
import UpdateFood from '../Pages/Update/UpdateFood';
import MyOrders from '../Pages/MyOrders/MyOrders';
import AddFood from '../Pages/AddFood/AddFood';
import PrivetRoute from '../PrivetRoutes/PrivetRoute';


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
                path: '/allFoods',
                element: <AllFood />
            },
            {
                path: '/gallery',
                element: <Gallery />
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
                path: '/myFoods',
                element: <PrivetRoute><MyFoods /></PrivetRoute>
            },
            {
                path: '/upadate-food/:id',
                element: <PrivetRoute><UpdateFood /></PrivetRoute>
            },
            {
                path: '/addFood',
                element: <PrivetRoute><AddFood /></PrivetRoute>
            },
            {
                path: '/food/:id',
                element: <FoodDetails />
            },
            {
                path: '/foodPurchase/:id',
                element: <PrivetRoute><FoodPurchase /></PrivetRoute>
            },
            {
                path: '/myOrders',
                element: <PrivetRoute><MyOrders /></PrivetRoute>
            },
        ]
    }
])

export default router;