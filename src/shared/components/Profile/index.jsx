import React, { useRef, useEffect } from 'react';
import {
  StyledProfile,
  StyledProfileContent,
  StyledProfileSection,
} from './Styles';
import ProfileImage from './ProfileImage';
import ScrollMagic from 'scrollmagic';
import { fadeInFromBottom } from '../../timelines';

const Profile = () => {
  const self = useRef(null);

  /** Set up GSAP animation timeline to play when component is in view */
  const mountAnimation = () => {
    const timeline = fadeInFromBottom(self.current);

    // Set up Scroll Magic Scene to trigger animation
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({ triggerElement: self.current, triggerHook: .9 })
      .on('enter', () => {
        timeline.play();
      })
      .addTo(controller);

    // Cleanup
    return () => {
      scene.destroy();
      controller.destroy();
    };
  };

  useEffect(mountAnimation, []);

  return (
    <StyledProfile ref={self}>
      <StyledProfileSection>
        <ProfileImage img={require('../../assets/profile.jpg')} />
      </StyledProfileSection>

      <StyledProfileSection>
        <StyledProfileContent>
          <h3>About</h3>
          <p>
            I’m a front-end developer with a strong passion for solving problems and creating beautiful experiences. I have over 4 years experience, both as an individual contributor at a conversion rate optimization agency then later as the team lead. I have proven experience in building smooth user interfaces across a number of global brands and SMEs.
          </p>
          <h3>Technical Skills</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React + Redux</li>
            <li>AngularJS</li>
            <li>Modern Build Tools (Webpack, Gulp, npm)</li>
            <li>SASS/LESS</li>
            <li>A/B Test Development</li>
          </ul>
        </StyledProfileContent>
      </StyledProfileSection>
    </StyledProfile>
  );
};

export default Profile;
