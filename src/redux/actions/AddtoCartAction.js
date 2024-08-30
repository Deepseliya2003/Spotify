// import { ADD_TO_CART_FAILED, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS } from '../types';
  
//   export const AddtoCartAction = (item, previousData) => {
//     return dispatch => {
//       dispatch({
//         type: ADD_TO_CART_LOADING,
//       });
//       try {
//         let itemArray = [];
//         if (previousData) {
//           itemArray.push(item, ...previousData);
//         } else {
//           itemArray.push(item);
//         }
//         console.log('itemArray', itemArray);
//         dispatch({
//           type: ADD_TO_CART_SUCCESS,
//           payload: itemArray,
//         });
//       } catch (error) {
//         dispatch({
//           type: ADD_TO_CART_FAILED,
//           payload: {
//             error: 'Something wents wrong please try again later.',
//           },
//         });
//       }
//     };
//   };
  


// src/redux/actions/AddToCartAction.js

import { ADD_TO_CART_FAILED, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS } from '../types';

export const AddtoCartAction = (item, previousData) => {
  return dispatch => {
    dispatch({ type: ADD_TO_CART_LOADING });
    try {
      // Check if the item is already in the cart
      const itemArray = previousData.some(cartItem => cartItem.id === item.id)
        ? previousData
        : [...previousData, item];

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: itemArray,
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAILED,
        payload: {
          error: 'Something went wrong. Please try again later.',
        },
      });
    }
  };
};
