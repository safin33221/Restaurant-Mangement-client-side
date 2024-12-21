import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

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
        </div>
    );
};

export default MainLayout;