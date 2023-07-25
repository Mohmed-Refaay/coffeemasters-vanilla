export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    this.loadExternalCSS("components/MenuPage.css");
  }

  connectedCallback() {}
}

customElements.define("menu-page", MenuPage);
