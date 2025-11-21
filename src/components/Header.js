export const Header = ({ t, toggleLang }) => {
  return `
    <header class="site-header">
      <nav>
        <ul class="nav-links">
          <li><a href="#home">${t.header.home}</a></li>
          <li><a href="#about">${t.header.about}</a></li>
          <li><a href="#projects">${t.header.projects}</a></li>
          <li><a href="#contact">${t.header.contact}</a></li>
        </ul>
        <button id="lang-toggle" class="lang-btn" aria-label="Switch Language">
          ${t.header.langBtn}
        </button>
      </nav>
    </header>
  `;
};
