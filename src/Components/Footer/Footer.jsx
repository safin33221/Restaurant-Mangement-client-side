import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import logo from "../../assets/logo/logo.png"

const Footer = () => {
    const { darktheme } = useContext(authContext)
    return (
        <footer className={`footer    p-10 ${darktheme ? "bg-gray-800 border-t border-gray-900" : "bg-base-300"}`}>

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
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
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