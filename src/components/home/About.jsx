import React from "react";
import { FaTree, FaHandsHelping } from "react-icons/fa";
import './about.css'
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Section: Image */}
        <div className="about-image">
          <img
            src="/farmer.jpg" 
            alt="Farmer with strawberries"
          />
          <div className="experience-badge">
            <p>100K number of trees planted  <br/>
                across Homabay County.
            </p>
          </div>
          <div className="description">
            <p>We aim to transform Homa Bay into a greener, cleaner, and healthier place for current and future generations. 
                Whether you’re an individual, organization, or community group, 
                there are many ways to join us in our mission. Together, we can make a difference.</p>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="about-content">
            <span className='about'>About Us</span>
          <h2>We’re Champions for Environment Conservation</h2>
          <div className="about-feature">
          <FaTree className="icon" />
            <div>
              <h3>Grassroots Action for a Greener Future</h3>
              <p>
              What started as a small initiative to plant trees during National Environment Conservation 
              Day has blossomed into a vibrant organization driving change at the community level.
              </p>
            </div>
          </div>
          <div className="about-feature">
          <FaHandsHelping className="icon" />
            <div>
              <h3>Empowering Communities</h3>
              <p>
              Through community-driven projects, we inspire and equip citizens to take ownership of 
              their environment, fostering collective action for sustainability.
              </p>
            </div>
          </div>
          <img
            src="/tree.jpg" 
            alt="Farmer with strawberries"
          />
        </div>
      </div>
    </section>
  );
};

export default About;