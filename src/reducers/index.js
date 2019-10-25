/* eslint-disable no-param-reassign */
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (action.payload.amount) {
        action.payload.amount += 1;
        return {
          ...state,
          cart: [...state.cart],
          subtotal: state.subtotal + action.payload.price,
        };
      }
      action.payload.amount = 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        subtotal: state.subtotal + action.payload.price,
      };
    case 'DELETE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload.id),
        subtotal: state.subtotal - (action.payload.amount * action.payload.price),

      };
    default:
      return state;
  }
};

export default reducer;
