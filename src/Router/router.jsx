import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home/Home';
import AddFood from '../PrivetRoutes/AddFood';
import AllFood from '../Pages/AllFood/AllFood';
import FoodDetails from '../Components/FoodDetails';
import FoodPurchase from '../Pages/FoodPurchase/FoodPurchase';
import Gallery from '../Pages/Gallery/Gallery';
import MyFoods from '../Pages/MyFood/MyFoods';


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
                element: <MyFoods />
            },
            {
                path: '/addFood',
                element: <AddFood />
            },
            {
                path: '/food/:id',
                element: <FoodDetails/>
            },
            {
                path: '/foodPurchase/:id',
                element: <FoodPurchase/>
            },
        ]
    }
])

export default router;