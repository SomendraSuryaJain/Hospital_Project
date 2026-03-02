import React from 'react';

const CTABanner = () => {
  const services = [
    { title: "Visitor Policy", 
        desc: "General Hospital welcomes visitors with its visitor policy to ensure patient privacy." },
    { title: "Specialties", 
        desc: "We specialize in various medical fields, enabling us to provide top-class medical care." },
    { title: "Clinical Services", 
        desc: "Our clinical services are comprehensive and personalized to meet your healthcare needs." },
    { title: "Mother & Child", 
        desc: "Our Mother & Child program offers specialized care to mothers and newborns." },
    { title: "Rooms", 
        desc: "General Hospital's luxurious rooms provide comfort and care during your medical stay." },
    { title: "Cost & Financing", 
        desc: "Discover our cost-effective medical packages and flexible financing options at General Hospital." },
  ];

  return (
    <div className="w-full font-sans">
      {/* Services Grid Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-black text-xl font-bold">{service.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{service.desc}</p>
                  <a href="#" className="text-red-600 font-semibold flex items-center group transition-colors hover:text-red-600">
                    Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Horizontal line logic: 
                  Visible only on desktop (md+) and only after the 3rd item (index 2)
                */}
                {index === 2 && (<div className="hidden md:block col-span-3 border-b border-black my-4" />)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
};

export default CTABanner;