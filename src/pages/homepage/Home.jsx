import React from 'react'
import Footer from '../../components/footer/Footer';
import HomeSection from '../../components/homesection/HomeSection';
import InfoCards from '../../components/homesection/InfoCards';
import AboutSection from '../../components/homesection/AboutSection'
import MedicalSection from '../../components/homesection/MedicalSection';

const Home = () => {
  return (
    <div>
      <HomeSection />
      <InfoCards />
      <AboutSection />
      <MedicalSection />
      <Footer />
    </div>
  );
};

export default Home;