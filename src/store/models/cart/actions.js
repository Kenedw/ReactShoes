export function addToCartRequest(id) {
  return {
    type: '@Cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@Cart/ADD_SUCCESS',
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
    type: '@Cart/UPDATE',
    id,
    amount,
  };
}
