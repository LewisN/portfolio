import React, { useRef, useEffect } from 'react';
import { StyledProfileImage, StyledImage, StyledBackground } from './Styles';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

const ProfileImage = () => {
  const self = useRef(null);
  const background = useRef(null);
  const image = useRef(null);

  /** Set up GSAP animation timeline to play when component is in view */
  const mountAnimation = () => {
    const timeline = gsap.timeline({ paused: true });
    timeline
        .from(background.current, {
            width: '0',
            duration: .6,
            ease: 'power1.out',
            clearProps: 'all',
        })
        .from(image.current, {
            scale: 0,
            rotate: 10,
            duration: .6,
            ease: 'power1.out',
            clearProps: 'all',
        }, '-=.3');

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
    <StyledProfileImage ref={self}>
      <StyledBackground ref={background} />
      <StyledImage ref={image} img={require('../../../assets/profile.jpg')} />
    </StyledProfileImage>
  );
}

export default ProfileImage;
