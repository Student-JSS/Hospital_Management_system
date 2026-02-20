import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Certification from '../components/Certification'
import HomeDoctors from '../components/HomeDoctors'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Certification/>
      <HomeDoctors/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
