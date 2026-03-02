import React from "react";
import { Phone, MapPin } from "lucide-react";

const HomeSection = () => {
  return (
    <section className="relative w-full h-screen">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",}}></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming Lives Through Excellence in Healthcare
          </h1>

          <p className="w-3xl mt-6 text-lg md:text-xl text-gray-200">
            We are committed to providing exceptional patient care and promoting
            wellness in our community.
          </p>

          <button className="mt-8 bg-gray-500 hover:bg-gray-600 transition px-6 py-3 rounded-lg text-white text-lg">
            Book An Appointment
          </button>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>4321 Gorakhpur in Uttar Pradesh, India 203205</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>(406) 555-0121</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection;