import React from "react";
// import hospitalImg from "../assets/hospital.jpg";

const AboutSection = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Heading Text */}
        <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We are committed to providing exceptional patient care and promoting
          wellness in our community. We offer personalized care plans tailored
          to meet the unique needs of each patient.
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/about-us.jpg"
            alt="Hospital"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Bottom Content */}
        <div className="mt-10 space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            General Hospital is a luxury medical facility that is dedicated to
            providing the highest quality medical care to its patients. Our
            state-of-the-art hospital is staffed by some of the best and
            compassionate medical professionals in the industry. We offer a
            wide range of medical services, including general surgery,
            neurology, cardiology, oncology, and much more.
          </p>

          <p>
            Welcome to the General Hospital, a luxury medical facility that
            offers world-class medical services to ensure the well-being of our
            patients. Our highly skilled medical professionals and
            state-of-the-art equipment enable us to provide specialized care to
            our patients. Whether you are visiting for a routine check-up or a
            complex medical procedure, we are committed to providing
            comprehensive care and personalized attention to meet your health
            needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;