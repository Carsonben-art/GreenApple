import React from "react";
import styles from "../home/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.tagline}>Green Apple</span>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
        Let’s Talk! We’re Ready to Answer All Your Questions
        </p>
        
      </div>
    </section>
  );
};

export default Hero;