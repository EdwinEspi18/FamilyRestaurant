export const getPlatillos = (products, id) => {
  const original = products.filter((product) => product.id_categorie === id);
  return original[0];
};
