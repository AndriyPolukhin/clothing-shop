import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
  const state = useSelector((state) => state, shallowEqual);
  const itemCount = selectCartItemsCount(state);
  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
