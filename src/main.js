import './style.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { translations } from './data/translations.js';

const app = document.querySelector('#app');
let currentLang = 'es';

const renderApp = () => {
  const t = translations[currentLang];

  app.innerHTML = `
    ${Header({ t })}
    <main>
      ${Hero({ t })}
      ${About({ t })}
      ${Projects({ t })}
      ${Contact({ t })}
    </main>
    ${Footer({ t })}
  `;

  // Re-attach event listeners after rendering
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
};

const toggleLang = () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  renderApp();
};

// Initial render
renderApp();

console.log('Portfolio loaded successfully!');
