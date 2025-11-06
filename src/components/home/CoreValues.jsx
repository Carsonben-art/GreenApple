// CoreValues.jsx
import Image from 'next/image';
import styles from './CoreValues.module.css';

const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Sustainability",
      description: "Advocating for practices that ensure long-term ecological balance."
    },
    {
      number: "02",
      title: "Community Engagement",
      description: "Empowering citizens to actively participate in environmental conservation."
    },
    {
      number: "03",
      title: "Education and Awareness",
      description: "Providing resources and knowledge to foster a culture of environmental responsibility."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "Building strong partnerships to amplify our impact."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Our Core Values</span>
          <h2 className={styles.title}>How We Make Environmental Impact</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/herobg.jpg"
              alt="Environmental conservation"
              fill
              className={styles.image}
              objectFit="cover"
            />
          </div>

          <div className={styles.valuesList}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <span className={styles.number}>{value.number}</span>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;