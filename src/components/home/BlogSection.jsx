import Link from 'next/link';
import styles from './BlogSection.module.css';

const BlogSection = ({ posts }) => {
    const blogPosts = [
        {
            title: "Green Apple Community Plants 500 Trees During National Environment Conservation Day",
            category: "Tree Planting",
            date: "September 4, 2023",
            image: "/treePlanting.jpg",
            slug: "small-scale-organic-garden"
          },
          {
            title: "Top 10 Tips for Eco-Friendly Living in Homa Bay",
            category: "Environment Education",
            date: "July 23, 2024",
            image: "/eco.jpg",
            slug: "small-scale-organic-garden"
          },
          {
            title: "How Local Youth Are Driving Change Through Green Apple Community’s Initiatives",
            category: "Community Initiatives",
            date: "September 4, 2023",
            image: "/community2.jpg",
            slug: "small-scale-organic-garden"
          },
          {
            title: "Community clean-up drives to combat pollution.",
            category: "Community Cleanup",
            date: "Feb 13, 2023",
            image: "/cleaning.jpg",
            slug: "small-scale-organic-garden"
          },
          {
            title: "Educational programs to promote sustainability and environmental stewardship",
            category: "Community Empowerment",
            date: "September 4, 2023",
            image: "/awareness1.jpg",
            slug: "small-scale-organic-garden"
          },
          
    ];
    
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Latest News & Articles</h2>
                    <p className={styles.sectionSubtitle}>Stay updated with our latest environmental initiatives and community projects</p>
                </div>
                <div className={styles.blogGrid}>
                    {blogPosts.map((blogPost, index) => (
                        <Link href="/" key={index} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                <img src={blogPost.image} alt={blogPost.title} />
                                <div className={styles.overlay}>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>{blogPost.category}</span>
                                        <span className={styles.date}>{blogPost.date}</span>
                                    </div>
                                    <h3 className={styles.title}>{blogPost.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;