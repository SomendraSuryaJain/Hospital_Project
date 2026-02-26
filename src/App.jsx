import React from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import About from './pages/aboutpage/About';
import Services from './pages/servicespage/Services';
import Contact from './pages/contactpage/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;