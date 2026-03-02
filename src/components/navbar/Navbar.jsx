import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHospitalSymbol } from "react-icons/fa";
import { NavLink } from 'react-router-dom'; // Link ki jagah NavLink import karein

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Active link ke liye reusable function
  const activeLinkStyle = ({ isActive }) => 
    isActive ? "text-red-600 transition-colors" : "hover:text-red-600 transition-colors";

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-xl shadow-lg">
                <FaHospitalSymbol />
              </div>
              <div>
                <h1 className="font-bold text-xl tracking-tight text-slate-900 leading-none">INDIRA</h1>
                <p className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Hospital</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-black font-bold">
              <NavLink to="/" className={activeLinkStyle}>Home</NavLink>
              <NavLink to="/about" className={activeLinkStyle}>About Us</NavLink>
              <NavLink to="/services" className={activeLinkStyle}>Services</NavLink>
              <NavLink to="/contact" className={activeLinkStyle}>Contact</NavLink>
              
              <div className="text-black font-extrabold ml-4 hover:text-red-600">Emergency call : (406) 555-0120</div>
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <button className="bg-red-600 text-white px-7 py-3 rounded-md font-bold hover:bg-red-700 transition-all shadow-md active:scale-95">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl">
            <div className="flex flex-col items-center gap-6 py-8 text-slate-900 font-bold">
              <NavLink to="/" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Home</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={activeLinkStyle}>About Us</NavLink>
              <NavLink to="/services" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Services</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Contact</NavLink>
              
              <div className="text-red-600 font-black pt-2 border-t w-full text-center">
                Call: (406) 555-0120
              </div>
              <button className="bg-red-600 text-white px-10 py-3 rounded-md font-bold shadow-lg">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;