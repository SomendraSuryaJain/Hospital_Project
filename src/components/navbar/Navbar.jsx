import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHospitalSymbol } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-blue-600 text-white text-center text-sm py-2">Emergency call: (406) 555-0120</div>

      {/* Main Navbar */}
      <nav className="bg-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl"><FaHospitalSymbol /></div>
              <div>
                <h1 className="text-sm text-gray-500">INDIRA</h1>
                <p className="text-sm font-semibold text-gray-800 -mt-1">HOSPITAL</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
              <Link to="/" className="text-blue-600">Home</Link>
              <Link to="/about" className="hover:text-blue-600">About Us</Link>
              <Link to="/services" className="hover:text-blue-600">Services</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
              <Link to="/" className="text-blue-600">Home</Link>
              <Link to="/about" className="hover:text-blue-600">About Us</Link>
              <Link to="/services" className="hover:text-blue-600">Services</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Book Appointment</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;