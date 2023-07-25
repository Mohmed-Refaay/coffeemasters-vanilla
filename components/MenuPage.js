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

    this.render();
  }

  render() {
    const container = this.root.querySelector("#menu");
    container.innerHTML = "";
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const elem = document.createElement("li");
        elem.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'></ul>
        `;

        container.appendChild(elem);

        category.products.forEach((d) => {
          const productItem = document.createElement("product-item");
          productItem.dataset.product = JSON.stringify(d);

          elem.querySelector("ul.category").appendChild(productItem);
        });
      }
    } else {
      container.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
