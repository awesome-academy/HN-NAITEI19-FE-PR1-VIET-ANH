export const getProductById = (productId) => {
  const products = JSON.parse(localStorage.getItem("products"));
  return products.find((val) => val.id === productId);
};
