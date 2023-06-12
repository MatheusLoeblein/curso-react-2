import * as types from './types';

export const incrementConter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};
export const decrementConter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
