const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, prop, value) {
    target[prop] = value;

    window.dispatchEvent(new Event(`appstore${prop}change`));

    return true;
  },
});

export default proxiedStore;
