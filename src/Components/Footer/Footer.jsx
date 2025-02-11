import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import logo from "../../assets/logo/logo.png"

const Footer = () => {
    
    return (
        <footer className={`footer shadow-2xl px-10 text-center mx-auto  py-10`}>

            <aside>
                <img src={logo} alt="" className='w-28 rounded-full ' />
                <p>
                    Master Chef Restaurant Mangement
                    <br />
                    Providing Service since 2010
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Online Ordering & Delivery</a>
                <a className="link link-hover">Table Reservation Management</a>
                <a className="link link-hover">Menu Customization & Updates</a>
                <a className="link link-hover">Customer Feedback & Loyalty Program</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;