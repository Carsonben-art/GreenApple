import BlogSection from '@/components/home/BlogSection'
import ServicesSection from '@/components/home/Services'
import Navbar from '@/components/Nav'
import Hero from '@/components/services/Hero'
import React from 'react'
import Contact from '../contact/page'
import ContactSection from '@/components/home/ContactsSection'
import Footer from '@/components/Footer'

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Services
