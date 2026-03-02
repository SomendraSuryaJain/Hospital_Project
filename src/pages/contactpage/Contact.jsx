import React from 'react'
import Footer from '../../components/footer/Footer.jsx';
import ContactSection from '../../components/contactsection/ContactSection.jsx';
import HospitalInfo from '../../components/contactsection/HospitalInfo.jsx';

const Contact = () => {
  return (
    <div>
      <ContactSection />
      <HospitalInfo />
      <Footer />
    </div>
  );
};

export default Contact;