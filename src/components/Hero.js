import profileImg from '../assets/img/perfil.jpg';

export const Hero = ({ t }) => {
  return `
    <section id="home" class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="greeting">${t.hero.greeting}</span>
          <h1>${t.hero.title}</h1>
          <h2 class="hero-subtitle">${t.hero.subtitle}</h2>
          <p>${t.hero.description}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">${t.hero.viewProjects}</a>
            <a href="#contact" class="btn btn-secondary">${t.hero.contactMe}</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-wrapper">
              <img src="${profileImg}" alt="Francisco Puyo">
          </div>
        </div>
      </div>
    </section>
  `;
};
