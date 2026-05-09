import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Stats from '../components/Stats';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import ExtraServices from '../components/ExtraServices';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Helmet>
        <title>VaidPR | Your Reputation, Our Priority</title>
        <meta name="description" content="VaidPR is a leading public relations and branding agency. We help startups and brands amplify their voice and build lasting credibility." />
      </Helmet>

      <TopBar />
      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Stats />
        <ExtraServices />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>


      <Footer />
    </div>
  );
};

export default Home;
