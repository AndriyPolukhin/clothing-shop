// * Dependencies
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// * Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const state = useSelector((state) => state, shallowEqual);
  const cartItems = selectCartItems(state);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
