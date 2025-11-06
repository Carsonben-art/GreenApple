import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>GreenApple</h2>
          <p>
          We’d love to hear from you! Reach out for inquiries, partnership opportunities, or to join our cause.
          </p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-section">
          <h3>Useful Info</h3>
          <ul>
            <li><a href="/join">Join Us</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/about">Learn More</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Explore More</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe Newsletter</h3>
          <p>Sign up to get updates & news.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All Right Reserved by BestMarkDesigners</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;