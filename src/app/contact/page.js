import ContactDetails from '@/components/contact/ContactDetails'
import Hero from '@/components/contact/Hero'
import Footer from '@/components/Footer'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactsSection'
import Navbar from '@/components/Nav'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactDetails />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
