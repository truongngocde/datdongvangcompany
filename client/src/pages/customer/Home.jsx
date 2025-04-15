import React from 'react'
import Hero from "../../components/Hero";
import CompanyLogo from "../../components/CompanyLogo";
import PurposeSection from '../../components/PurposeSection';
import FeaturesSection from '../../components/FeaturesSection';
import ScheduleSection from '../../components/ScheduleSection';
import MonitorSection from '../../components/MonitorSection';
import PricingSection from '../../components/PricingSection';
import ServicesSection from '../../components/ServicesSection';
import TestimonialSection from '../../components/TestimonialSection';
import NewsletterSection from '../../components/NewsletterSection';
function Home() {
  return (
    <>
    <Hero />
    <ScheduleSection />
    <ServicesSection />
    <FeaturesSection />
    <MonitorSection />
    {/* <PricingSection /> */}
    <TestimonialSection />
    <PurposeSection />
    <CompanyLogo />
    <NewsletterSection />
    </>
  )
}

export default Home