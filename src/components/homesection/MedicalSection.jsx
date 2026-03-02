import React from "react";

const MedicalSection = () => {
  const services = [
    {
      title: "Medical Advancements",
      description:
        "Our state-of-the-art facility offers comprehensive care with an emphasis on patient comfort and satisfaction.",
      image: "https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2026/02/services-1.jpg",
    },
    {
      title: "Counseling",
      description:
        "Our qualified therapists provide personalized counselling services to help you overcome life's challenges.",
      image:
        "https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2026/02/services-2.jpg",
    },
    {
      title: "Family Medicine",
      description:
        "Our team of experienced physicians provides comprehensive medical care for individuals and families.",
      image:
        "https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2026/02/services-3.jpg",
    },
  ];

  return (
    <section className="bg-[#f3f5f7] py-16 md:py-24 px-6 md:px-16">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Primary Care
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
          Medical Advancements
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-red-600 font-medium flex items-center gap-2 group">Learn More
                <span className="group-hover:translate-x-1 transition">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalSection;