import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactsSection";
import Navbar from "@/components/Nav";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
