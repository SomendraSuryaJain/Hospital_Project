import React from 'react'
import HeroSection from '../../components/hero/HeroSection';
import InfoCards from '../../components/infocard/InfoCards';
import AboutSection from '../../components/aboutsection/AboutSection';
import MedicalSection from '../../components/medicalsection/MedicalSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InfoCards />
      <AboutSection />
      <MedicalSection />
    </div>
  );
};

export default Home;