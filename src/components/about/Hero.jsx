import React from "react";
import styles from "../home/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.tagline}>Green Apple</span>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
         Best Award Winning Environment Conservation Community
        </p>
        
      </div>
    </section>
  );
};

export default Hero;