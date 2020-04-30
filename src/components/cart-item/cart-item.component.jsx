import React from 'react';

import {
  CartItemContainer,
  Img,
  ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
