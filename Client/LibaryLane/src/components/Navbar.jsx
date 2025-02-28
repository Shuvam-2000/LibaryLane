import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import menu_icon from "../assets/menu_icon.png";
import toast from 'react-hot-toast'
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    // state to handle the login button dynamically by checking user authentication
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if the user is authenticated 
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await axios.get('https://libarylane.onrender.com/auth/check-auth', { withCredentials: true });
                setIsAuthenticated(true);
            } catch (error) {
                toast.error("Error checking auth status:", error);
                setIsAuthenticated(false);
            }
        };
        checkAuthStatus();
    }, []);

    // Handle logout
    const handleLogout = async () => {
        try {
            await axios.get('https://libarylane.onrender.com/user/logout', { withCredentials: true });
            setIsAuthenticated(false);
            navigate("/login");
            toast.success('Logout SuccessFull')
        } catch (error) {
            toast.error("Logout failed:", error);
        }
    };

    // Handle login redirection
    const handleLogin = () => {
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-300 relative">
            {/* Logo */}
            <h1 className="sm:text-3xl text-2xl font-bold text-black cursor-pointer">
                Library<span className="sm:text-3xl text-2xl font-bold text-red-600">Lane</span>
            </h1>

            {/* Navigation Links */}
            <ul className="hidden md:flex justify-evenly mt-2 gap-5 font-medium">
                <NavLink to="/" className="group">
                    <li className="py-1">HOME</li>
                    <hr className="border-none outline-none h-0.5 bg-red-600 w-3/5 m-auto hidden group-hover:block" />
                </NavLink>
                <NavLink to="/ourbooks" className="group">
                    <li className="py-1">OUR BOOKS</li>
                    <hr className="border-none outline-none h-0.5 bg-red-600 w-3/5 m-auto hidden group-hover:block" />
                </NavLink>
                <NavLink to="/aboutus" className="group">
                    <li className="py-1">ABOUT US</li>
                    <hr className="border-none outline-none h-0.5 bg-red-600 w-3/5 m-auto hidden group-hover:block" />
                </NavLink>
                <NavLink to="/contact" className="group">
                    <li className="py-1">CONTACT US</li>
                    <hr className="border-none outline-none h-0.5 bg-red-600 w-3/5 m-auto hidden group-hover:block" />
                </NavLink>
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Login/Logout Button */}
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-6 py-2 text-sm font-medium rounded-full md:block hidden">
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="bg-red-600 text-white px-6 py-2 text-sm font-medium rounded-full md:block hidden">
                        Login
                    </button>
                )}
                <img
                    src={menu_icon}
                    alt="menu-icon"
                    className="sm:w-5 w-4 cursor-pointer md:hidden text-[#f9755b]"
                    onClick={() => setMenuVisible(!menuVisible)}
                />
            </div>

            {/* Sidebar for Mobile View */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
                    menuVisible ? "translate-x-0" : "translate-x-full"}`} style={{ width: "80%" }}>
                <div className="flex flex-col text-gray-600 h-full gap-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuVisible(false)}
                        className="self-start p-4 text-3xl text-black sm:block"
                    >
                        &times;
                    </button>
                    {/* Sidebar Links */}
                    <NavLink
                        className="py-2 pl-6 text-center font-medium"
                        to="/"
                        onClick={() => setMenuVisible(false)}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        className="py-2 pl-6 text-center font-medium"
                        to="/ourbooks"
                        onClick={() => setMenuVisible(false)}
                    >
                        OUR BOOKS
                    </NavLink>
                    <NavLink
                        className="py-2 pl-6 text-center font-medium"
                        to="/aboutus"
                        onClick={() => setMenuVisible(false)}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        className="py-2 pl-6 text-center font-medium"
                        to="/contact"
                        onClick={() => setMenuVisible(false)}
                    >
                        CONTACT US
                    </NavLink>
                    <NavLink
                        className="py-2 pl-6 text-center font-medium"
                        to="/login"
                        onClick={() => {
                            setMenuVisible(false);
                            if (isAuthenticated) {
                                handleLogout();
                            } else {
                                navigate("/login");
                            }}}
                        >
                     {isAuthenticated ? "LOGOUT" : "LOGIN/SIGNUP"}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
