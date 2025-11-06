// import Footer from '@/components/Footer'
import About from '@/components/home/About'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactsSection'
import CoreValues from '@/components/home/CoreValues'
import Hero from '@/components/home/Hero'
import ProjectsSection from '@/components/home/ProjectsSection'
import ReviewSection from '@/components/home/ReviewSection'
import ServicesSection from '@/components/home/Services'

import TeamSection from '@/components/home/TeamSection'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ReviewSection />
      <ServicesSection />
      <About />
      <ProjectsSection />
      <CoreValues />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
