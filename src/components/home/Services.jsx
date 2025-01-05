import Image from 'next/image';
import styles from './services.module.css';

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <span className={styles.tag2}>Our Services</span>
      <h2 className={styles.heading}>We Offer Eco & Environmental Services</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <Image src="/reforestation.jpg" alt="Tree Planting" width={400} height={250} className={styles.image}/>
          <span className={styles.tag}>Reforestation</span>
          <h3 className={styles.title}>Tree Planting Events</h3>
          
          <p className={styles.p}>Hands-on tree planting events to restore natural habitats and enhance green spaces.</p>
        </div>
        <div className={styles.serviceCard}>
          <Image src="/community.jpg" alt="Clean-up Drive" width={400} height={250} className={styles.image}/>
          <span className={styles.tag}>Community Service</span>
          <h3 className={styles.title}>Clean-up Drives</h3>
          <p className={styles.p}>Community clean-up drives aimed at combating pollution and promoting cleanliness.</p>
        </div>
        <div className={styles.serviceCard}>
          <Image src="/education.jpg" alt="Education Programs" width={400} height={250} className={styles.image}/>
          <span className={styles.tag}>Education</span>
          <h3 className={styles.title}>Sustainability Programs</h3>
          <p className={styles.p}>Educational programs to promote sustainability and environmental stewardship.</p>
        </div>
      </div>
    </section>
  );
}