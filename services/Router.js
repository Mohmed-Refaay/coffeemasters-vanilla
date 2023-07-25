const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url = a.getAttribute("href");

        Router.go(url);
      });
    });
    // handle route changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.link, false);
    });

    // go to the initial route
    Router.go(location.pathname);
  },
  go: (link, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ link }, null, link);
    }
    let pageElement = null;

    switch (link) {
      case "/":
        pageElement = document.createElement("menu-page");
        pageElement.innerText = "Main";
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        pageElement.innerText = "Order";
        break;

      default:
        if (link.startsWith("/product-")) {
          const productId = link.substring(link.indexOf("-") + 1);

          pageElement = document.createElement("details-page");
          pageElement.innerText = "Order" + productId;
          pageElement.dataset.id = productId;
        }
    }

    if (pageElement) {
      const main = document.querySelector("main");
      main.innerHTML = "";
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
