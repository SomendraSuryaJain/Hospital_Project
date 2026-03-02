import React from 'react';

const HospitalInfo = () => {
  const contactInfo = [
    { label: "General Information", detail: "1234 Washington Ave. Manchester, Kentucky 39495.", phone: "(406) 555-0120" },
    { label: "Find a Doctor", detail: "For help finding a doctor, please search for a specific doctor or call:", phone: "(406) 555-0120" },
    { label: "Patient Relations", detail: "General Hospital Kentucky", phone: "(406) 555-0120" },
  ];

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Contact & Map Section */}
      <section className="relative w-full">
        
        {/* Contact Details Container */}
        {/* Use px-4 for mobile and center the inner content on large screens */}
        <div className="relative z-10 w-full px-4 md:px-20 lg:px-32 -mb-32 pt-20 flex justify-center lg:justify-start">
          <div className="bg-white w-full max-w-6xl p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
            
            {/* Left Column: Text Info */}
            <div className="space-y-12 w-full lg:w-1/2">
              {contactInfo.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-xl text-black">{item.label}</h4>
                  <p className="text-gray-700 text-base leading-relaxed">{item.detail}</p>
                  <p className="text-[#008BB7] text-base font-bold underline decoration-2 underline-offset-8 cursor-pointer hover:text-blue-800 transition-colors">
                    {item.phone}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Right Column: Visual Placeholder Box */}
            <div className="w-full lg:w-[450px] h-[300px] bg-gray-50 border border-gray-200 rounded-sm shadow-inner">
               {/* This represents the white empty box/form area in your image */}
            </div>
          </div>
        </div>

        {/* The Map Background */}
        {/* h-[600px] gives it that "full screen" hero feel */}
        <div className="w-full h-[500px] md:h-[600px] bg-gray-200">
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=40.712776,-74.005974&zoom=12&size=1920x600&key=YOUR_API_KEY" 
            alt="Hospital Location Map" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>
      </section>
    </div>
  );
};

export default HospitalInfo;