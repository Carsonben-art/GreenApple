import React from "react";
import styles from "../home/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.tagline}>Green Apple</span>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
        Solutions You Can Rely On, Services You Can Trust
        </p>
        
      </div>
    </section>
  );
};

export default Hero;