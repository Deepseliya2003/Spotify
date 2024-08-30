import * as ACTION from '../types';

const initialState = {
  isLoading: false,
  cartData: [],
  error: '',
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.ADD_TO_CART_LOADING:
    case ACTION.REMOVE_TO_CART_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ACTION.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartData: action.payload,
        error: '',
      };
    case ACTION.REMOVE_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartData: action.payload,
        error: '',
      };
    case ACTION.ADD_TO_CART_FAILED:
    case ACTION.REMOVE_TO_CART_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
