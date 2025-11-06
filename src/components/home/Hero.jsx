import React from "react";
import styles from "../home/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.tagline}>Re-Greening HomaBay for a Sustainable Future</span>
        <h1 className={styles.title}>Building a Greener Future <br/> Together for Homa Bay</h1>
        <p className={styles.description}>
        Join the Green Apple Community in our mission to restore and sustain the environment in Homa Bay County, Kenya. 
        We’ve been leading re-greening initiatives, clean-up campaigns, and environmental education programs. Together, we can create a cleaner, healthier, and greener future for all.
        </p>
        <div className={styles.buttons}>
          <a href="/about" className={styles.primaryButton}>
            Discover More
          </a>
          <a href="/services" className={styles.secondaryButton}>
            See All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;