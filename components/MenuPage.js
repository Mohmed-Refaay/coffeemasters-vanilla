export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    this.loadExternalCSS("components/MenuPage.css");
  }

  connectedCallback() {
    window.addEventListener("appstoremenuchange", () => {
      console.log(app.store.menu);
      this.render();
    });
  }

  render() {
    const container = this.root.querySelector("#menu");
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const elem = document.createElement("li");

        elem.innerHTML = `
          <h3>${category.name}</h3>
        `;

        container.appendChild(elem);
      }
    } else {
      container.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
