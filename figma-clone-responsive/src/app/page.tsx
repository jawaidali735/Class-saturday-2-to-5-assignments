

import Apps from '@/components/Apps'
import Customise from '@/components/Customise'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import OurSponsers from '@/components/OurSponsers'
import Plan from '@/components/Plan'
import ProjectManage from '@/components/ProjectManage'
import ProjectManage2 from '@/components/ProjectManage2'
import Testimonials from '@/components/Testimonials'
import UserExtension from '@/components/UserExtension'
import Work from '@/components/Work'
import YourData from '@/components/YourData'

import React from 'react'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
     
      <Hero/>
      <ProjectManage/>
      <ProjectManage2/>
      <UserExtension/>
      <Customise/>
      <Plan/>
     <Work/>
     <YourData/>
     <OurSponsers/>
      <Apps/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
