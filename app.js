import { loadData } from "./services/Menu.js";
import Store from "./services/Store.js";
import Router from "./services/Router.js";

// load custom web components
import { DetailsPage } from "./components/DetialsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();

  app.router.init();
});

HTMLElement.prototype.loadExternalCSS = async function (link) {
  const res = await fetch(link);
  const css = await res.text();

  const styleElemet = document.createElement("style");

  styleElemet.textContent = css;

  if (!this.root) return css;

  this.root.appendChild(styleElemet);
};
