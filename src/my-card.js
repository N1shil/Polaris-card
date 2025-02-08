import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Perfect Boiled Eggs";
    this.subtitle = "Learn how to make the perfect boiled egg with this simple step-by-step recipe.";
    this.image = "https://www.ambitiouskitchen.com/wp-content/uploads/2021/09/Perfect-Hardboiled-Eggs-8.jpg";
    this.link = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        width: 400px;
        border: 1px solid #ccc;
        margin: 16px auto;
        padding: 16px;
        text-align: center;
        background-color: #f5f5dc;
        border-radius: 8px;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
      }
      h2 {
        font-size: 20px;
        margin: 16px 0;
        color: #333;
      }
      p {
        font-size: 14px;
        margin: 8px 0;
        color: #555;
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
    `;
  }

  render() {
    return html`
      <section class="card">
        <img src="${this.image}" alt="${this.title}">
        <h2>${this.title}</h2>
        <p>${this.subtitle}</p>
        <a href="${this.link}" target="_blank">Details</a>
      </section>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);