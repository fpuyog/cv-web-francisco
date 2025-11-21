export const About = ({ t }) => {
  return `
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">${t.about.title}</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>${t.about.description}</p>
            
            <h3>${t.about.skillsTitle}</h3>
            <div class="skills-list">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">Azure</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
