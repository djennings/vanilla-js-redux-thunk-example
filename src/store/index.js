import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { counter } from '../redux/counter';
import { loadingReducer } from '../redux/ui';

import { loadState, saveState } from './stateStore';

// Obviously trivial and unnecessary need to 'slice' state here
// but example of how to get reducers to specialize!!!
const rootReducer = combineReducers({
  isLoading: loadingReducer,
  counter
});

// THe middlwware below is just for grins
const customMiddleWare = store => next => action => {
  if (action.type === 'INCREMENT') {
    console.log(
      `Increment button was clicked, current counter state is ${
        store.getState().counter
      } \nI will now add to it`
    );
  } else {
    console.log(
      `Decrement button was clicked, current counter state is ${
        store.getState().counter
      } \nI will now subtract from it`
    );
  }
  next(action);
};

const persisetedState = loadState();

//create store
export const store = createStore(
  rootReducer,
  persisetedState,
  compose(
    applyMiddleware(thunk, customMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  )
);


store.subscribe(() => {
  saveState({ counter: store.getState().counter });
});
