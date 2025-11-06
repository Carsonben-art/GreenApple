import './aboutSection.css'

const AboutSection = () => {
  const stats = [
    {
      number: "Our Mission",
      description: "To restore and preserve the environment of Homa Bay County for present and future generations."
    },
    {
      number: "Our Vision",
      description: "A greener, cleaner, and more sustainable Homa Bay County."
    },
  ];

  return (
    <section className="about-section2">
      <div className="about-container">
        <div className="about-header">
         <div className="about-heading">
          <span className="about-label">About GreenApple</span>
          <h2 className="about-title">Learning About Our <br/> Success History</h2>

         </div>
          
          <div className="about-content">
            <p>Green Apple Community was founded in October 2023 by a group of environmentally conscious individuals who shared a common goal: to restore the natural beauty of Homa Bay County and combat the growing threats of deforestation, pollution, and climate change. Our founders — Gabriel, Davis, Grace, Arshley, Betty, Reagan, and Ben — united their diverse skills and passions to form a dynamic team dedicated to making a difference.</p>
            
            <p>What started as a small initiative to plant trees during the National Environment Conservation Day has grown into a vibrant organization that inspires action at the grassroots level. Through community-driven projects, we empower citizens to take ownership of their environment and work toward a sustainable future.</p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <h4 className="stat-title">{stat.title}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;