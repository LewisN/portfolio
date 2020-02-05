import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { StyledHero } from './Styles';
import { fetchAnimationLibrariesIfNeeded } from '../../../actions';

const Hero = props => {
  /*
   * Keep a reference to vanta so we can avoid reinitializing
   * every time the component state updates
   */
  const vanta = useRef(null);

  /*
   * Fetch Three.js and Vanta libraries if this is the first time they 
   * are used in the app. They will only ever be loaded once.
   */
  props.dispatch(fetchAnimationLibrariesIfNeeded());
  
  useEffect(() => {
    /*
     * Initialize Vanta and save the instance in the reference
     * defined earlier so it can be destroyed on dismount. Only do this
     * if an instance doesn't already exist or the bgAnimation function
     * doesn't yet exist (i.e. the scripts are still loading in)
     */
    if (!vanta.current && props.animationLibraries.bgAnimation) {
      vanta.current = props.animationLibraries.bgAnimation();
    }

    return () => {
      /*
       * Destroy any existing instance of vanta on component
       * dismount to avoid unnecessary memory usage
       */
      if (vanta.current) {
        vanta.current.destroy();
      }
    };
  }, [props.animationLibraries]);

  return (
    <StyledHero className="bgAnim">
      {props.children}
    </StyledHero>
  );
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Hero);
