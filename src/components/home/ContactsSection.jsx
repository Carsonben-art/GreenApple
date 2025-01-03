// components/ContactSection.jsx
import styles from './ContactSection.module.css';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaPhone className={styles.icon} />,
      title: 'Phone No:',
      details: [
        '+254 700 000 000',
        '+254 794 437 498'
      ]
    },
    {
      icon: <MdEmail className={styles.icon} />,
      title: 'Email Address:',
      details: [
        'greenapplecommunity2023@gmail.com',
        'info@greenapplecommunity.com'
      ]
    },
    {
      icon: <IoLocationSharp className={styles.icon} />,
      title: 'Location:',
      details: [
        'Homa Bay County, Kenya',
        
      ]
    }
  ];

  return (
    <section className={styles.contactSection}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        {contactInfo.map((info, index) => (
          <div key={index} className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              {info.icon}
            </div>
            <div className={styles.contactInfo}>
              <h3 className={styles.title}>{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className={styles.detail}>
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;