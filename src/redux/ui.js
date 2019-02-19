import * as Const from '../constants';

// reducers
export function loadingReducer(state = false, action) {
  switch (action.type) {
    case Const.loading:
      return true;
    case Const.increment:
    case Const.decrement:
      return false;
    default:
      return state;
  }
}

// action creators
export const showLoading = () => {
  return {
    type: Const.loading
  };
};
