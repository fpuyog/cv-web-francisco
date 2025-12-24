export const Projects = ({ t }) => {
  const projectsHTML = t.projects.items.map(project => `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a href="${project.link || '#'}" class="project-link" ${project.link ? 'target="_blank" rel="noopener noreferrer"' : ''}>${t.projects.viewProject} <i class="fas fa-arrow-right"></i></a>
    </article>
  `).join('');

  return `
    <section id="projects" class="section projects-section">
      <div class="container">
        <h2 class="section-title">${t.projects.title}</h2>
        <div class="projects-grid">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `;
};
