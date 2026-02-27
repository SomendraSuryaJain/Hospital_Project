import React from "react";
import img from '../../assets/aboutus-img.jpg';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Small Heading */}
        <p className="text-center text-sm tracking-widest text-gray-500 uppercase mb-4">
          About Us
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-4xl mx-auto leading-tight mb-14">
          We always delivers expertise and compassion in every interaction.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="w-full">
            <img src={img} alt="Medical Team"
              className="rounded-2xl shadow-lg w-full h-full object-cover"/>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Experience exceptional medical care at the General Hospital, a
              luxury hotel designed to provide comfortable and personalized
              healthcare services to its guests.
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              General Hospital is a luxury medical facility that provides
              top-notch medical care to its patients. With state-of-the-art
              technologies and experienced medical professionals, we offer
              personalized treatment options for all kinds of medical
              conditions. Our facility is equipped with comfortable and
              spacious rooms.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed italic">
              "Experience top-notch medical care at General Hospital, where our
              expert team of doctors and modern facilities ensure your
              well-being. Rest easy in our luxurious accommodations and ease
              your worries."
            </p>

            <button className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;