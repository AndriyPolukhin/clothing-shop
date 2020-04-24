/**
 * Cart Utils @fn
 */

// * @fn: addToCartItem
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // * check if the cart Item Exists in the Cart already
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // * return a new array if the cart Item already exists
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
