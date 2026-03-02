import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaHospitalSymbol } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkStyle = ({ isActive }) => 
    `transition-all duration-300 ${isActive ? "text-red-600 underline underline-offset-8" : "hover:text-red-600"}`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
              <FaHospitalSymbol size={22} />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-slate-900 leading-none">INDIRA</h1>
              <p className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Hospital</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-black font-bold">
            <NavLink to="/" className={activeLinkStyle}>Home</NavLink>
            <NavLink to="/about" className={activeLinkStyle}>About Us</NavLink>
            <NavLink to="/services" className={activeLinkStyle}>Services</NavLink>
            <NavLink to="/contact" className={activeLinkStyle}>Contact</NavLink>
            
            <div className="text-slate-800 font-extrabold ml-4 hidden xl:block">
              <span className="text-red-600">Emergency:</span> (406) 555-0120
            </div>
          </div>

          {/* Book Appointment Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-all shadow-md hover:shadow-red-200 active:scale-95">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-900 transition-transform active:scale-90"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out border-t border-slate-100 shadow-2xl overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col items-center gap-6 py-10 px-6 text-slate-900 font-bold">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={activeLinkStyle}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={activeLinkStyle}>Contact</NavLink>
          
          <div className="w-full border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Emergency Call</p>
            <p className="text-red-600 font-black text-lg">(406) 555-0120</p>
          </div>
          
          <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-100">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;