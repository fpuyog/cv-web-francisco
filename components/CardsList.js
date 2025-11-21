const templateCardsList = document.createElement('template');
templateCardsList.innerHTML = `
  <style>
    :host {
      display: block;
      max-width: 900px;
      margin: 0 auto 3rem;
      padding: 0 1rem;
    }
    .card {
      border: 1px solid #ccc;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
      background: #f4f7fb;
      color: #1a1a1a;
      transition: background 0.3s, color 0.3s;
    }
    @media (prefers-color-scheme: dark) {
      .card {
        background: #23272e;
        color: #e6eaf0;
        border-color: #314455;
      }
    }
    .card h3 {
      margin-top: 0;
      margin-bottom: 0.3rem;
    }
    .card p {
      margin: 0.3rem 0 0 0;
      line-height: 1.4;
    }
    .card a {
      display: inline-block;
      margin-top: 0.6rem;
      color: var(--color-accent, #4a90e2);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    .card a:hover {
      color: #357ABD;
      text-decoration: underline;
    }
  </style>
  <div id="container"></div>
`;

class CardsList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(templateCardsList.content.cloneNode(true));
  }

  updateList(items) {
    const container = this.shadowRoot.getElementById('container');
    container.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      let cardHtml = `<h3>${item.titulo}</h3><p>${item.descripcion}</p>`;
      if (item.link) {
        cardHtml += `<a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver proyecto</a>`;
      }

      card.innerHTML = cardHtml;
      container.appendChild(card);
    });
  }
}

customElements.define('cards-list', CardsList);
