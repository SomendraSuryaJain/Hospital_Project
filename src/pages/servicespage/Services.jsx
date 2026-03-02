import React from 'react'
import Footer from '../../components/footer/Footer.jsx';
import ServiceSection from '../../components/servicesection/ServiceSection.jsx';
import Servicecare from '../../components/servicesection/Servicecare.jsx'
import AppointmentBanner from '../../components/servicesection/AppointmentBanner.jsx';
import CTABanner from '../../components/servicesection/CTABanner.jsx';
import NeedHelp from '../../components/aboutsection/NeedHelp.jsx'

const Services = () => {
  return (
    <div>
      <ServiceSection />
      <Servicecare />
      <AppointmentBanner />
      <CTABanner />
      <NeedHelp />
      <Footer />
    </div>
  );
};

export default Services;