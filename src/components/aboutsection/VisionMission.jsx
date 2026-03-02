import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* VISION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Left Title */}
          <div>
            <h3 className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Vision
            </h3>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To be the premier healthcare provider, recognized for exceptional
              patient-centered care, medical innovation, and positive
              community impact.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-300"></div>

        {/* MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Left Title */}
          <div>
            <h3 className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Mission
            </h3>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our mission is to improve and transform lives through
              compassionate and comprehensive healthcare services. We are
              committed to delivering exceptional medical care, promoting
              wellness, and advancing medical knowledge through innovation and
              research. We strive to be the trusted partner in our community's
              health and well-being.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;