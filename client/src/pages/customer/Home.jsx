import React from 'react'
import ImageSlider from '../../components/homePageComponent/ImageSlider';
import HeroSection from "../../components/homePageComponent/HeroSection";
import IntroduceSection from '../../components/homePageComponent/IntroduceSection';
import ServicesSection from '../../components/homePageComponent/ServicesSection';
import ProjectsSection from '../../components/homePageComponent/ProjectsSection'
import StructureSection from '../../components/homePageComponent/StructureSection';
import NewsSection from '../../components/homePageComponent/NewsSection';


function Home() {
  
  return (
    <>
    <ImageSlider />
    <HeroSection/>
    <IntroduceSection />
    <ServicesSection />
    <ProjectsSection />
    <StructureSection />
    <NewsSection />
    </>
  )
}

export default Home