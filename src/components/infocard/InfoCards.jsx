import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Find a Doctor",
    description:
      "Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields.",
    linkText: "Doctor Schedule",
  },
  {
    title: "Make an Appointment",
    description:
      "Schedule an appointment with our top medical professionals at General Hospital through our online booking service.",
    linkText: "Contact Us",
  },
  {
    title: "Find a Condition",
    description:
      "Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital.",
    linkText: "Need Help?",
  },
];

const InfoCards = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition duration-300"
          >
            {/* Top Accent Line */}
            <div className="w-12 h-1 bg-red-600 mb-6"></div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {card.description}
            </p>

            {/* Link */}
            <button className="flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all cursor-pointer">
              {card.linkText}
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;