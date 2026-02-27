import React from 'react'
import HeroSection from '../../components/hero/HeroSection';
import InfoCards from '../../components/infocard/InfoCards';
import AboutSection from '../../components/aboutsection/AboutSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InfoCards />
      <AboutSection />
    </div>
  );
};

export default Home;