import React from 'react';
import { ArrowRight } from 'lucide-react';

const Servicecare = () => {
  const topCards = [
    {
      title: "Patient Care and Services",
      description: "Our newly established system is dedicated to providing patients with a comprehensive range of specialty care and advanced treatments. With an extensive network of state-of-the-art facilities, we ensure convenient access to top-notch healthcare services for all.",
    },
    {
      title: "Cancer",
      description: "At General Hospital, our team of experienced oncologists provide personalized care to patients with cancer, utilizing advanced treatments and technology.",
    }
  ];

  const serviceCards = [
    {
      title: "Orthopedics",
      description: "Whether you need joint replacements or sports injury treatments, our skilled orthopedic surgeons and staff are here to help you on the path to recovery at General Hospital.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", // Representative image
    },
    {
      title: "Dental",
      description: "Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800", // Representative image
    },
    {
      title: "Counseling",
      description: "Our qualified therapists provide personalized counseling services to help you overcome life's challenges.",
      image: "https://images.unsplash.com/photo-1527137341206-8800dc05178a?auto=format&fit=crop&q=80&w=800", // Representative image
    }
  ];

  return (
    <section className="bg-[#f0f7f9] py-16 px-6 md:px-12 lg:px-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3e50] mb-6">
            Patient Care and Services
          </h1>
          <p className="text-[#5a7184] text-lg leading-relaxed">
            Our newly established system is dedicated to providing patients with a 
            comprehensive range of specialty care and advanced treatments. With an 
            extensive network of state-of-the-art facilities, we ensure convenient 
            access to top-notch healthcare services for all.
          </p>
        </div>

        {/* Top Text-Only Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {topCards.map((card, index) => (
            <div key={index} className="bg-white border border-white rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">{card.title}</h3>
                <p className="text-black leading-relaxed mb-8">{card.description}</p>
              </div>
              <button className="flex items-center text-red-600 font-medium group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Image-Based Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <div key={index} className="bg-white border border-white rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all">
              <div className="h-56 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-4">{card.title}</h3>
                <p className="text-black leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                <button className="flex items-center text-red-600 font-medium group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicecare;