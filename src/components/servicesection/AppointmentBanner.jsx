import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="bg-red-200 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <h2 className="text-black text-2xl md:text-3xl font-bold leading-tight max-w-xl text-center md:text-left">
          Take the first step towards better health. Book your appointment now!
        </h2>

        {/* Buttons Section */}
        <div className="flex items-center gap-4">
          {/* Rounded Outline Button */}
          <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 cursor-pointer hover:text-white transition-all underline">
            Book An Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default AppointmentBanner;