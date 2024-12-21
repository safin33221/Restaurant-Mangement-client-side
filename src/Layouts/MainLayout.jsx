import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

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
        </div>
    );
};

export default MainLayout;