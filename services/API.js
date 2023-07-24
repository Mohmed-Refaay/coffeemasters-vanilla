const API = {
  url: "/data/menu.json",
  fetchMenu: async function () {
    const data = await fetch(this.url);

    return await data.json();
  },
};

export default API;
