import * as actionTypes from "./shopping-types";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item: item,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const addToWishList = (item) => {
  console.log(item);
  return {
    type: actionTypes.WISH_LIST,
    payload: {
      item: item,
    },
  };
};

export const removeFromWishList = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_WISH_LIST,
    payload: {
      id: itemId,
    },
  };
};
