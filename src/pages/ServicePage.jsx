import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../components/ServiceHero';
import ServiceBenefits from '../components/ServiceBenefits';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Helmet>
        <title>{`${service.title} | VaidPR Elite Services`}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} | VaidPR`} />
        <meta property="og:description" content={service.description} />
      </Helmet>

      <ServiceHero 
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        onCtaClick={scrollToContact}
      />
      <ServiceBenefits benefits={service.benefits} />
      <PricingSection tiers={service.pricing} />
      <Testimonials />
      <FAQ />
      <ContactForm selectedService={service.title} />
    </motion.div>
  );
};

export default ServicePage;
