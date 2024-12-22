import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, singOutUser } = useContext(authContext)
    console.log(user);
    const links = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li ><NavLink to='/allFoods'>All Foods</NavLink></li>
        <li ><NavLink to='/gallery'>Gallery</NavLink></li>
    </>
    //sign out user

    const handleSignOut = () => {
        singOutUser()
            .then(() => {
                toast.success('Sign Out successful')
            })
    }
    return (
        <div className="navbar  w-11/12 mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Restaurent Management</a>
            </div>
            <div className="flex-none gap-2">
                <div className="menu menu-horizontal px-1 flex items-center">
                    {links}

                    {
                        user ?
                            <button onClick={handleSignOut}
                                className="btn btn-xl btn-outline hover:bg-blue-400 mx-2">Logout</button>
                            :
                            <Link to='/login'>
                                <button className="btn btn-xl btn-outline hover:bg-blue-400 mx-2">Login</button>
                            </Link>
                    }

                </div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><NavLink to='/myFoods'>My Foods</NavLink></li>
                            <li><NavLink to='/addFood'>Add food</NavLink></li>
                            <li><NavLink to='/myOrders'>My Orders</NavLink></li>
                        </ul>
                    </div>
                        : null
                }
            </div>
        </div>
    );
};

export default Navbar;