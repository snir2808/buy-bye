import * as actionTypes from "./shopping-types";
const INITIAL_STATE = {
  cart: [],
  wishList: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload.item;
      const isInCart = state.cart.find((item) =>
        item.id === action.payload.item.id ? true : false
      );
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.WISH_LIST:
      const itemForWish = action.payload.item;
      const isInWish = state.wishList.find((item) => {
        if (item.id === itemForWish.id) return true;
        else return false;
      });
      return {
        ...state,
        wishList: !isInWish
          ? [...state.wishList, { ...itemForWish }]
          : state.wishList,
      };
    case actionTypes.REMOVE_FROM_WISH_LIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
