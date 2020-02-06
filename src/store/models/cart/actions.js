export function addToCart(product) {
  return {
    type: '@Cart/ADD',
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@Cart/REMOVE',
    id: productId,
  };
}

export function updateAmountProduct(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
