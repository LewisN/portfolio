import { TOGGLE_NAV } from '../constants/action-types';

export const initialState = {
  open: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      console.log('TOGGLE_NAV');
      return Object.assign({}, state, { open: !state.open });

    default:
      return state;
  }
};
