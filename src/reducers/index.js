import { ADD_ARTICLE } from '../constants/action-types';

export const initialState = {
  work: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.work.concat(action.payload)
      });

    default:
      return state;
  }
};
