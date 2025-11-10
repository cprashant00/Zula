import React from 'react'
import {HeroSection} from "../Components/Hero/Hero";
import AppList from "../Components/AppList/Applist";
import AboutUs from '../Components/AboutUs/AboutUs';
import AppBrain from "../Components/AppBrain/AppBrain";

const Home = () => {
  return (
    <div>
        <HeroSection/>
          <AppList/>
          <AboutUs/>
          <AppBrain/>
    </div>
  )
}

export default Home