import * as Const from '../constants';
import { createSelector } from 'reselect';

const initialState = 0;

// reducers
export const counter = function(state = initialState, action) {
  switch (action.type) {
    case Const.increment:
      return state + action.payload;
    case Const.decrement:
      return state - action.payload;
    default:
      return state;
  }
};


// selectors
const getCountValue = state => state.counter;

export const getCurrentCount = createSelector(
  [getCountValue],
  count => {
    return count;
  }
);


// action creators
export const increment = payload => {
  return {
    type: Const.increment,
    payload
  };
};

export const decrement = payload => {
  return {
    type: Const.decrement,
    payload
  };
};

export const delay = payload => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(payload));
    }, 2000);
  };
};
