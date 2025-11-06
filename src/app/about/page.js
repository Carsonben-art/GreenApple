import AboutSection from '@/components/about/About'
import Hero from '@/components/about/Hero'
import Footer from '@/components/Footer'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactsSection'
import Navbar from '@/components/Nav'


const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default About
