import {
  SET_NAV_STATE,
  SUBMITTED_EMAIL,
  REQUEST_PROJECTS,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILURE,
  REQUEST_ANIMATION_LIBRARIES,
  REQUEST_ANIMATION_LIBRARIES_SUCCESS,
  REQUEST_ANIMATION_LIBRARIES_FAILURE,
} from '../constants/action-types';
import Contentful from '../Contentful';

/**
 * @typedef {Object} Action
 * @property {String} type
 * @property {number} payload
 */

/**
 * @param {String} payload 'OPEN', 'CLOSED' or 'TOGGLE'
 * @returns {Action}
 */
export const setNavState = payload => ({
  type: SET_NAV_STATE,
  payload,
});

/**
 * @param {String} payload 'SUCCESS' or 'ERROR'
 * @returns {Action}
 */
export const submittedEmail = payload => ({
  type: SUBMITTED_EMAIL,
  payload,
});

/**
 * @returns {Action}
 */
export const requestProjects = () => ({
  type: REQUEST_PROJECTS,
});

/**
 * @param {JSON} response
 * @returns {Action}
 */
export const requestProjectsSuccess = response => ({
  type: REQUEST_PROJECTS_SUCCESS,
  response,
});

/**
 * @param {String} error
 * @returns {Action}
 */
export const requestProjectsFailure = error => ({
  type: REQUEST_PROJECTS_FAILURE,
  error,
});

/**
 * Load in project data from Contentful
 * @returns {Function}
 */
export const fetchProjects = () => {
  let projects;
  return async dispatch => {
    dispatch(requestProjects);

    await Contentful
      .getEntries({
        content_type: 'project',
        order: '-fields.date'
      })
      .then(json => json ? projects = json : null)

    return dispatch(
      projects ? requestProjectsSuccess(projects) : requestProjectsFailure('Failed to retrieve projects')
    );
  }
};

/**
 * @returns {Action}
 */
export const requestAnimationLibraries = () => ({
  type: REQUEST_ANIMATION_LIBRARIES,
});

/**
 * @param {JSON} response
 * @returns {Action}
 */
export const requestAnimationLibrariesSuccess = response => ({
  type: REQUEST_ANIMATION_LIBRARIES_SUCCESS,
  response,
});

/**
 * @param {String} error
 * @returns {Action}
 */
export const requestAnimationLibrariesFailure = error => ({
  type: REQUEST_ANIMATION_LIBRARIES_FAILURE,
  error,
});

/**
 * Load in Three.js and Vanta libraries from CDN
 * @async
 * @returns {Function}
 */
const fetchAnimationLibraries = () => {
  const libraries = [
    'https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js',
    'https://cdn.jsdelivr.net/gh/tengbao/vanta@master/dist/vanta.dots.min.js',
  ];
  let loaded = false;

  return async dispatch => {
    dispatch(requestAnimationLibraries());
    const loadScript = url => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = false;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

    await Promise.all(libraries.map(url => loadScript(url)))
      .then((state) => {
        loaded = true;
      });
    
    return dispatch(
      loaded ? requestAnimationLibrariesSuccess(loaded) : requestAnimationLibrariesFailure('Failed to retrieve libraries')
    );
  }
};

/**
 * @param {Object} state Passed state through Redux's getState()
 * @returns {Boolean}
 */
const shouldFetchAnimationLibraries = state => !(state.animationLibraries.isLoading || state.animationLibraries.isLoaded);

/**
 * Only load in animation libraries once. Every subsequent call will bypass the AJAX request
 * @returns {Promise}
 */
export function fetchAnimationLibrariesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAnimationLibraries(getState())) {
      return dispatch(fetchAnimationLibraries())
    } else {
      return Promise.resolve()
    }
  }
}
