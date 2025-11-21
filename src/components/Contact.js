export const Contact = ({ t }) => {
  return `
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">${t.contact.title}</h2>
        <p>${t.contact.text}</p>
        <div class="contact-links">
          <a href="mailto:fr.puyog@gmail.com" class="contact-btn" title="${t.contact.emailTitle}">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com/in/fr-puyog" target="_blank" class="contact-btn" title="${t.contact.linkedinTitle}">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/fpuyog" target="_blank" class="contact-btn" title="${t.contact.githubTitle}">
            <i class="fab fa-github"></i>
          </a>
           <a href="https://wa.me/56977284065" target="_blank" class="contact-btn" title="${t.contact.whatsappTitle}">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  `;
};
