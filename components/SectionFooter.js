const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
  <style>
    :host {
      display: block;
      text-align: center;
      padding: 2rem 1rem;
      border-top: 1px solid #ccc;
      background: var(--color-bg, #f0f4f8);
    }
    .contact-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .contact-links a {
      color: var(--color-text, #1a1a1a);
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s ease;
    }
    .contact-links a:hover {
      color: var(--color-accent, #4a90e2);
    }
    .contact-links i {
      font-size: 1.5rem;
    }
  </style>
  <slot></slot>
`;

class SectionFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
  }
}

customElements.define('section-footer', SectionFooter);
