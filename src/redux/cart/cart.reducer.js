/**
 * CART REDUCER
 */
import CartActionTypes from "./cart.types";

// * 1. Initial State
const INITIAL_STATE = {
  hidden: true,
};

// * 2. Cart Reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
