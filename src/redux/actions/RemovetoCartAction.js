// // redux/actions/RemoveFromCartAction.js

// import { REMOVE_TO_CART_FAILED, REMOVE_TO_CART_LOADING, REMOVE_TO_CART_SUCCESS } from '../types';

// export const RemovetoCartAction = (itemId, previousData) => {
//   return dispatch => {
//     dispatch({
//       type: REMOVE_TO_CART_LOADING,
//     });
//     try {
//       // Filter out the item based on itemId
//       const itemArray = previousData.filter(item => item.id !== itemId);
//       console.log('itemArray', itemArray);
//       dispatch({
//         type: REMOVE_TO_CART_SUCCESS,
//         payload: itemArray,
//       });
//     } catch (error) {
//       dispatch({
//         type: REMOVE_TO_CART_FAILED,
//         payload: {
//           error: 'Something went wrong. Please try again later.',
//         },
//       });
//     }
//   };
// };









// src/redux/actions/RemoveFromCartAction.js

import { REMOVE_TO_CART_FAILED, REMOVE_TO_CART_LOADING, REMOVE_TO_CART_SUCCESS } from '../types';

export const RemovetoCartAction = (itemId, previousData) => {
  return dispatch => {
    dispatch({ type: REMOVE_TO_CART_LOADING });
    try {
      // Filter out the item based on itemId
      const itemArray = previousData.filter(item => item.id !== itemId);

      dispatch({
        type: REMOVE_TO_CART_SUCCESS,
        payload: itemArray,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_TO_CART_FAILED,
        payload: {
          error: 'Something went wrong. Please try again later.',
        },
      });
    }
  };
};

