class SectionAbout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 800px;
          background: var(--color-bg, white);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 2rem 2rem 3rem 2rem;
          margin: 2rem auto;
          color: var(--color-text);
          transition: background 0.3s ease, color 0.3s ease;
        }
        body.dark-mode :host {
          background: #2c313a;
          color: #e6eaf0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .foto-perfil {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          margin-bottom: 1.5rem;
        }
        .about-text {
          text-align: center;
          line-height: 1.7;
          font-size: 1.1rem;
          white-space: pre-line;
          max-width: 700px;
        }
      </style>
      <div class="about-container">
        <slot name="image">
          <!-- fallback image if no slot provided -->
          <img src="assets/img/perfil.jpg" alt="Foto de perfil" class="foto-perfil" />
        </slot>
        <slot name="description" class="about-text"></slot>
      </div>
    `;
  }
}

customElements.define('section-about', SectionAbout);
