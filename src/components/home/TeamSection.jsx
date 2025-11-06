// components/TeamSection.jsx
import styles from './TeamSection.module.css';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: 'Gabriel', role: 'Assistant Chair', image: '/user.png' },
    { id: 2, name: 'Davis', role: 'Secretary', image: '/user.png' },
    { id: 3, name: 'Grace', role: 'Member', image: '/user.png' },
    { id: 4, name: 'Arshley', role: 'Chair', image: '/user.png' },
    { id: 5, name: 'Betty', role: 'Member', image: '/user.png' },
    { id: 6, name: 'Reagan', role: 'Head Technician, Treasurer', image: '/user.png' },
    { id: 7, name: 'Ben', role: 'Assistant Technician', image: '/user.png' },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.badge}>Our Team</div>
        <h2 className={styles.title}>
          We Have Lot's Of Experience<br />
          Team Members
        </h2>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image} 
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                  objectFit="cover"
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;