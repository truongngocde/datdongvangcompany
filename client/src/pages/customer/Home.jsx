import React from 'react'
import HeroSlider from "../../components/HeroSlider";
import FeaturesSection from '../../components/FeaturesSection';
import IntroduceSection from '../../components/IntroduceSection';
import StructureSection from '../../components/StructureSection';
import ServicesSection from '../../components/ServicesSection';
import NewsletterSection from '../../components/NewsletterSection';
import NewsSlider from '../../components/NewsSlider';
import NewsPdfSection from '../../components/NewsPdfSection';

function Home() {
  return (
    <>
    <HeroSlider/>
    <IntroduceSection />
    <ServicesSection />
    <FeaturesSection />
    <StructureSection />
    <NewsSlider />
    <NewsPdfSection />
    {/* <NewsletterSection /> */}
    </>
  )
}

export default Home