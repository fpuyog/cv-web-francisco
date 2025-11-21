const texts = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      habilidades: "Habilidades",
      educacion: "Educación",
      contacto: "Contacto"
    },
    heroSubtitulo: "Ingeniero de Datos / Fullstack Developer",
    heroTitulo: "Francisco Puyo",
    heroDescripcion: "Especialista en diseño y optimización de pipelines en entornos cloud, con amplia experiencia en desarrollo fullstack.",
    sobreMiDescripcion: `Soy Ingeniero de Datos con amplia experiencia en el diseño, desarrollo y optimización de pipelines en entornos cloud como Azure y Google Cloud Platform. Domino procesos ETL, consultas SQL y herramientas de integración de datos, con una fuerte orientación a asegurar la calidad, rendimiento y automatización en proyectos de migración y transformación de datos.

Además, tengo habilidades en desarrollo fullstack con tecnologías como Java, C#, .NET, Python, HTML, CSS y JavaScript, lo que me permite integrar soluciones de datos con aplicaciones web y aportar una visión integral en la construcción de sistemas.

Soy una persona proactiva, analítica y orientada al trabajo en equipo, con experiencia en metodologías ágiles como Scrum y Kanban, y fuertes habilidades en comunicación efectiva y liderazgo de pequeños equipos técnicos.

Próximamente compartiré algunos proyectos destacados que he desarrollado, disponibles en mi GitHub.`,
    linkedin: "LinkedIn",
    github: "GitHub",
    mail: "Correo",
    whatsapp: "WhatsApp",
    descargarCV: "Descargar CV"
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About me",
      proyectos: "Projects",
      experiencia: "Experience",
      habilidades: "Skills",
      educacion: "Education",
      contacto: "Contact"
    },
    heroSubtitulo: "Data Engineer / Fullstack Developer",
    heroTitulo: "Francisco Puyo",
    heroDescripcion: "Specialist in design and optimization of pipelines in cloud environments, with extensive fullstack development experience.",
    sobreMiDescripcion: `I am a Data Engineer with extensive experience in designing, developing, and optimizing pipelines in cloud environments such as Azure and Google Cloud Platform. I master ETL processes, SQL queries, and data integration tools, with a strong focus on ensuring quality, performance, and automation in data migration and transformation projects.

Additionally, I have fullstack development skills with technologies including Java, C#, .NET, Python, HTML, CSS, and JavaScript, allowing me to integrate data solutions with web applications and provide a comprehensive vision in system construction.

I am proactive, analytical, and team-oriented, with experience in agile methodologies like Scrum and Kanban, and strong communication and leadership skills in managing small technical teams.

I will soon share notable projects I have developed, available on my GitHub.`,
    linkedin: "LinkedIn",
    github: "GitHub",
    mail: "Email",
    whatsapp: "WhatsApp",
    descargarCV: "Download CV"
  }
};

const contentData = {
  es: {
    proyectos: [
      { titulo: "Proyecto 1", descripcion: "Descripción del proyecto 1...", link: "https://github.com/usuario/proyecto1" },
      { titulo: "Proyecto 2", descripcion: "Descripción del proyecto 2...", link: "https://github.com/usuario/proyecto2" }
    ],
    experiencia: [
      { titulo: "Ingeniero de Datos - Empresa A", descripcion: "Responsable del diseño y optimización de pipelines ETL en Azure." },
      { titulo: "Desarrollador Fullstack - Empresa B", descripcion: "Desarrollo de aplicaciones web usando Java y JavaScript." }
    ],
    habilidades: [
      { titulo: "Lenguajes de programación", descripcion: "Python, Java, C#, .NET, JavaScript, SQL" },
      { titulo: "Herramientas y tecnologías", descripcion: "Azure, GCP, SSIS, DBeaver, APIs REST" }
    ],
    educacion: [
      { titulo: "Ingeniería en Informática", descripcion: "Universidad Técnica de Valparaíso (2010-2015)" },
      { titulo: "Cursos especializados en UX y Accesibilidad", descripcion: "Formación continua en plataformas en línea" }
    ]
  },
  en: {
    proyectos: [
      { titulo: "Project 1", descripcion: "Description of project 1...", link: "https://github.com/usuario/project1" },
      { titulo: "Project 2", descripcion: "Description of project 2...", link: "https://github.com/usuario/project2" }
    ],
    experiencia: [
      { titulo: "Data Engineer - Company A", descripcion: "Responsible for designing and optimizing ETL pipelines in Azure." },
      { titulo: "Fullstack Developer - Company B", descripcion: "Web application development using Java and JavaScript." }
    ],
    habilidades: [
      { titulo: "Programming Languages", descripcion: "Python, Java, C#, .NET, JavaScript, SQL" },
      { titulo: "Tools and Technologies", descripcion: "Azure, GCP, SSIS, DBeaver, REST APIs" }
    ],
    educacion: [
      { titulo: "Computer Engineering", descripcion: "Technical University of Valparaíso (2010-2015)" },
      { titulo: "Specialized Courses in UX and Accessibility", descripcion: "Continuous training on online platforms" }
    ]
  }
};

function updateCardsList(lang) {
  ['proyectos', 'experiencia', 'habilidades', 'educacion'].forEach(type => {
    const cardsListEl = document.querySelector(`cards-list[type="${type}"]`);
    if (cardsListEl && contentData[lang] && contentData[lang][type]) {
      cardsListEl.updateList(contentData[lang][type]);
    }
  });
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);

  // Cambiar navegación
  document.querySelectorAll('header nav ul li a').forEach(link => {
    const key = link.getAttribute('data-key');
    if (texts[lang] && texts[lang].nav && texts[lang].nav[key]) {
      link.textContent = texts[lang].nav[key];
    }
  });

  // Actualizar hero-principal slots
  const hero = document.querySelector('hero-principal');
  if (hero) {
    const heroSub = hero.querySelector('[data-key="heroSubtitulo"]');
    const heroTitle = hero.querySelector('[data-key="heroTitulo"]');
    const heroDesc = hero.querySelector('[data-key="heroDescripcion"]');
    if (heroSub) heroSub.textContent = texts[lang].heroSubtitulo || '';
    if (heroTitle) heroTitle.textContent = texts[lang].heroTitulo || '';
    if (heroDesc) heroDesc.textContent = texts[lang].heroDescripcion || '';
  }

  // Actualizar section-about slot
  const about = document.querySelector('section-about');
  if (about) {
    const aboutSlot = about.querySelector('[data-key="sobreMiDescripcion"]');
    if (aboutSlot) aboutSlot.textContent = texts[lang].sobreMiDescripcion || '';
  }

  // Actualizar contactos
  const contactLinks = document.querySelectorAll('.contact-links a span');
  contactLinks.forEach(el => {
    const key = el.getAttribute('data-key');
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  // Actualizar cards list dinámicos
  updateCardsList(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadLanguage();

  document.getElementById('es-btn').addEventListener('click', () => changeLanguage('es'));
  document.getElementById('en-btn').addEventListener('click', () => changeLanguage('en'));

  const toggleThemeBtn = document.querySelector('.toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggleThemeBtn.setAttribute('aria-pressed', !!isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

function loadLanguage() {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    changeLanguage(savedLang);
  } else {
    const lang = navigator.language.startsWith('es') ? 'es' : 'en';
    changeLanguage(lang);
  }
}

function applyTheme(theme) {
  const toggleThemeBtn = document.querySelector('.toggle-theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    if(toggleThemeBtn) toggleThemeBtn.setAttribute('aria-pressed', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    if(toggleThemeBtn) toggleThemeBtn.setAttribute('aria-pressed', 'false');
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}
