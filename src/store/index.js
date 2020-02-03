import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/index';

const initialState = {
  navIsOpen: false,
  projects: {
    isLoading: false,
    isLoaded: false,
    items: [],
  },
  animationLibraries: {
    isLoading: false,
    isLoaded: false,
    bgAnimation: false,
  }
};

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
