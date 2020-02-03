import {
  SET_NAV_STATE,
  REQUEST_PROJECTS,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILURE,
  REQUEST_ANIMATION_LIBRARIES,
  REQUEST_ANIMATION_LIBRARIES_SUCCESS,
  REQUEST_ANIMATION_LIBRARIES_FAILURE,
} from '../constants/action-types';
import { combineReducers } from 'redux';

const navIsOpen = (state = false, action) => {
  switch (action.type) {
    case SET_NAV_STATE:
      return action.payload === 'TOGGLE' ? !state : action.payload === 'OPEN';

    default:
      return state;
  }
};

const projects = (state = {
  isLoading: false,
  isLoaded: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case REQUEST_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: true,
        items: action.response.items,
      });

    case REQUEST_PROJECTS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: true,
      });

    default:
      return state;
  }
};

const animationLibraries = (state = {
  isLoading: false,
  isLoaded: false,
  bgAnimation: false,
}, action) => {
  switch (action.type) {
    case REQUEST_ANIMATION_LIBRARIES:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case REQUEST_ANIMATION_LIBRARIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: true,
        bgAnimation: () => window.VANTA.DOTS({
          el: '.bgAnim',
          mouseControls: false,
          touchControls: false,
          scale: 2.00,
          scaleMobile: 1.00,
          color: 0xff0000,
          color2: 0xffffff,
          backgroundColor: 0xffffff,
          spacing: 50.00,
          size: 5.00,
        }),
      });

    case REQUEST_ANIMATION_LIBRARIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: false,
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  navIsOpen,
  projects,
  animationLibraries,
});
