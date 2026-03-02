import React from 'react'
import Footer from '../../components/footer/Footer'
import AboutUs from '../../components/aboutsection/AboutUs';
import AboutSection from '../../components/aboutsection/AboutSection';
import VisionMission from '../../components/aboutsection/VisionMission';
import NeedHelp from '../../components/aboutsection/NeedHelp';

const About = () => {
  return (
    <div>
      <AboutUs />
      <AboutSection />
      <VisionMission />
      <NeedHelp />
      <Footer />
    </div>
  );
};

export default About;