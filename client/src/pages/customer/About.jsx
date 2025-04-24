import React from 'react'
import ImageSlider from '../../components/aboutPageComponent/ImageSlider';
import HeroSection from "../../components/aboutPageComponent/HeroSection";
import NguonnhanlucSection from "../../components/aboutPageComponent/NguonnhanlucSection";
import SumenhSection from '../../components/aboutPageComponent/SumenhSection';
import DoitacchienluocSection from '../../components/aboutPageComponent/DoitacchienluocSection';
import GiatricotloiSection from '../../components/aboutPageComponent/GiatricotloiSection';

function About() {
  return (
    <>
      <ImageSlider />
      <HeroSection />
      <NguonnhanlucSection/>
      <SumenhSection />
      <DoitacchienluocSection />
      <GiatricotloiSection/>
    </>
  )
}

export default About