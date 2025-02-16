import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get your HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Perfect Boiled Eggs";
    this.image = "https://www.ambitiouskitchen.com/wp-content/uploads/2021/09/Perfect-Hardboiled-Eggs-8.jpg";
    this.link = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --my-card-bg: #f5f5dc;
        --my-card-border: 1px solid #ccc;
        --my-card-shadow: none;
      }

      :host([fancy]) {
        --my-card-bg: #FFD700; 
        --my-card-border: 3px solid black;
        --my-card-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
      }

      .card {
        width: 500px;
        margin: 20px auto;
        padding: 16px;
        text-align: center;
        background-color: var(--my-card-bg);
        border: var(--my-card-border);
        border-radius: 8px;
        box-shadow: var(--my-card-shadow);
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
      }

      h1 {
        font-size: 20px;
        margin: 16px 0;
        color: #333;
      }

      a {
        display: inline-block;
        padding: 12px 20px;
        margin: 5px;
        text-decoration: none;
        border: none;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
        border-radius: 5px;
      }

      a:hover {
        background-color: #45a049;
      }

      details {
        transition: all 0.3s ease;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h1 class="cardheader">${this.title}</h1>
        <img src="${this.image}" alt="${this.title}" />
        
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot></slot>
          </div>
        </details>

        <a href="${this.link}" target="_blank">
          <button class="btn"><em>Link for more info</em></button>
        </a>
      </div>
    `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },  
      title: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }

  openChanged(e) {
    this.fancy = e.target.getAttribute('open') !== null;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);