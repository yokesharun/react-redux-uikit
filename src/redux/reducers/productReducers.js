import { actionTypes } from "../constants/actionTypes";

export const productReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case actionTypes.RESET_PRODUCT:
        return {};

    default:
      return state;
  }
};
