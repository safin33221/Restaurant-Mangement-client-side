import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar section */}
            <nav className='bg-base-300'>
                <Navbar />
            </nav>

            {/* Main section  */}

            <Outlet></Outlet>

            {/* Footer section  */}
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;