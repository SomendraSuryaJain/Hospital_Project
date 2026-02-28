import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHospitalSymbol } from "react-icons/fa";
import {Link} from 'react-router-dom'

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Emergency Bar */}
      {/* <div className="bg-red-600 text-white text-center text-sm py-2">Emergency call: (406) 555-0120</div> */}

      {/* Main Navbar */}
      <nav className="bg-gray-100">
        
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
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

export default AboutUs;