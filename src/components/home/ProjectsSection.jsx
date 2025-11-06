import Image from 'next/image';
import styles from './projectsSection.module.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tree planting Drives",
      image: "/planting.jpg",
      category: "Recently Completed",
      description: "Green Apple has planted hundreds of trees during National Environment Conservation events and community-driven initiatives."
    },
    {
      title: "Community Clean-Up Campaigns",
      image: "/cleanup.jpg",
      category: "Recently Completed",
      description:"We organize regular clean-up events to keep Homa Bay’s neighborhoods clean and reduce waste pollution."
    },
    {
      title: "Environment Education Programs",
      image: "/awareness2.jpg",
      category: "Recently Completed",
      description: "We host outreach sessions to educate citizens about sustainable practices, waste management, and the importance of tree planting."
    },
    
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>Projects/Initiatives</span>
        <h2 className={styles.title}>Recently Completed Projects: Cultivating a Greener Future</h2>
        <p className={styles.description}>
        Through impactful initiatives like tree-planting drives to restore degraded lands, 
        regular clean-up campaigns to reduce waste pollution, and educational programs on 
        sustainability, we're making a difference for future generations. Together, let's combat 
        climate change and build a cleaner, greener tomorrow. 🌱
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className={styles.overlay} />
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.text}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;