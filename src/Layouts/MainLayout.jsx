import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { auth } from '../Firebase/firebase.config';
import { authContext } from '../Provider/AuthProvider';

const StyledDiv = styled.div`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    
`;

const MainLayout = () => {
    const {darktheme} = useContext(authContext)

    return (

        <StyledDiv>
            <div >
                {/* Navbar section */}
                <nav  className={` ${darktheme ?"bg-gray-800 border-b border-gray-900": "bg-base-300"}`}>
                    <Navbar />
                </nav>

                {/* Main section  */}

                <Outlet></Outlet>

                {/* Footer section  */}
                <Footer></Footer>

                <ToastContainer></ToastContainer>
            </div>
        </StyledDiv>
    );
};

export default MainLayout;