import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  if (!product) return;

  const isFound = app.store.cart.find(
    (d) => d.product.id === product.id,
  );

  if (!!isFound) {
    app.store.cart = app.store.cart.map((d) =>
      d.product.id === product.id
        ? {
            ...d,
            qty: d.qty + 1,
          }
        : d,
    );
  } else {
    app.store.cart = [...app.store.cart, { product, qty: 1 }];
  }
}
