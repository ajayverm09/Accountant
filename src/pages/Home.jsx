import React from 'react'
import HeroSection from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import HomeCard from '../components/HomeCard'
import HomeTeam from '../components/HomeTeam'
import HomeStats from '../components/HomeStats'
import HomeTestimonial from '../components/HomeTestimonial'
import HomeNews from '../components/HomeNews'
import ContactDiv from '../components/ContactDiv'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeServices />
      <HomeCard />
      <HomeTeam />
      <HomeStats/>
      <HomeTestimonial />
      <HomeNews/>
      <ContactDiv/>
    </div>
  )
}

export default Home
