import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-[#414141] py-14">
      <div className="flex flex-col sm:grid grid-cols-1 gap-10 sm:gap-14 my-10 text-sm">

        {/* Company Links Section */}
        <div className="text-center font-mono">
          <h1 className="sm:text-3xl text-2xl font-bold text-black">
            Library<span className="text-[#f21c1c]">Lane</span>
          </h1>
          <p className="mt-4 font-mono text-gray-600">
            Discover, explore, and buy books that inspire, educate, and entertain all in one place
          </p>
          
          <h2 className="text-lg font-semibold mt-6 mb-4 tracking-widest">COMPANY</h2>
          <div className="space-x-6">
            <Link to="/" className="text-black hover:text-[#f21c1c]">Home</Link>
            <Link to="/ourbooks" className="text-black hover:text-[#f21c1c]">Our Books</Link>
            <Link to="/aboutus" className="text-black hover:text-[#f21c1c]">About Us</Link>
            <Link to="/contact" className="text-black hover:text-[#f21c1c]">Contact Us</Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-4">
          <h2 className="text-md font-medium mb-2 tracking-wide">Connect With Us:</h2>
          <div className="flex justify-center gap-6 mt-6 cursor-pointer">
            <FaFacebook className="w-[20px] hover:text-[#f21c1c]" />
            <FaInstagramSquare className="w-[20px] hover:text-[#f21c1c]" />
            <FaTwitter className="w-[20px] hover:text-[#f21c1c]" />
            <FaYoutube className="w-[20px] hover:text-[#f21c1c]" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-400 pt-4">
        <p>&copy; 2025 LibraryLane. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
