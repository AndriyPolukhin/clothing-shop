// * Dependencies
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// * Components

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CustomButtonContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ history }) => {
  const state = useSelector((state) => state, shallowEqual);
  const cartItems = selectCartItems(state);
  const dispatch = useDispatch();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButtonContainer
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButtonContainer>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
