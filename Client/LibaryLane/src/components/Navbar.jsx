import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu_icon from "../assets/menu_icon.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

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
                <NavLink to="/contactus" className="group">
                    <li className="py-1">CONTACT US</li>
                    <hr className="border-none outline-none h-0.5 bg-red-600 w-3/5 m-auto hidden group-hover:block" />
                </NavLink>
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <button onClick={() => navigate("/login")} className="bg-red-600 hover:scale-110 transition-all duration-500 text-white px-8 py-3 rounded-full font-bold hidden md:block">
                    Login
                </button>
                <img src={menu_icon} alt="menu-icon" className="sm:w-5 w-4 cursor-pointer md:hidden text-[#f9755b]" onClick={() => setMenuVisible(!menuVisible)} />
            </div>

            {/* Sidebar for Mobile View */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${menuVisible ? "translate-x-0" : "translate-x-full"}`}style={{ width: "80%" }}>
                <div className="flex flex-col text-gray-600 h-full gap-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuVisible(false)}
                        className="self-start p-4 text-3xl text-black"
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
                        to="/contactus"
                        onClick={() => setMenuVisible(false)}
                    >
                        CONTACT US
                    </NavLink>
                    <NavLink
                        className="py-2 pl-6 pb-10 text-center font-medium"
                        to="/login"
                        onClick={() => setMenuVisible(false)}
                    >
                        LOGIN/SIGNUP
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar