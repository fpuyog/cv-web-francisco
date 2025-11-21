const templateHero = document.createElement('template');
templateHero.innerHTML = `
  <style>
    :host {
      display: block;
      text-align: center;
      padding: 2rem 1rem;
    }

    ::slotted(div[slot="sub-title"]) {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-accent, #4a90e2);
      margin-bottom: 0.5rem;
    }
    ::slotted(div[slot="title"]) {
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    ::slotted(div[slot="description"]) {
      font-size: 1.1rem;
      line-height: 1.4;
      max-width: 700px;
      margin: 0 auto;
    }
  </style>
  <slot name="sub-title"></slot>
  <slot name="title"></slot>
  <slot name="description"></slot>
`;

class HeroPrincipal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateHero.content.cloneNode(true));
  }
}
customElements.define('hero-principal', HeroPrincipal);
