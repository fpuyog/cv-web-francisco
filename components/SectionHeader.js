class SectionHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          margin: 3rem 0 1.5rem;
          font-size: 2rem;
          font-weight: 700;
          border-bottom: 2px solid var(--color-accent, #4a90e2);
          padding-bottom: 0.5rem;
          color: inherit;
          text-align: center;
        }
      </style>
      <h2>${this.getAttribute('title') || ''}</h2>
    `;
  }
}
customElements.define('section-header', SectionHeader);
