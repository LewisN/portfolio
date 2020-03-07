import React, { useEffect, useRef } from 'react';
import { StyledClientList, StyledClientLogo } from './Styles';
import ScrollMagic from 'scrollmagic';
import { flyInStaggerFromRight } from '../../timelines';

const ClientList = props => {
  const self = useRef(null);
  const clients = useRef([]);

  /** Set up GSAP animation timeline to play when component is in view */
  const mountAnimation = () => {
    const timeline = flyInStaggerFromRight(clients.current);

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

  // Prepare animation on inital component render
  useEffect(mountAnimation, []);

  return (
    <StyledClientList ref={self}>
      {props?.clients?.map((client, index) => (
        <li
          key={client.name}
          ref={el => clients.current[index] = el}
        >
          <StyledClientLogo>
            <img alt={client.name} src={client.logo} />
          </StyledClientLogo>
        </li>
      ))}
    </StyledClientList>
  );
};

export default ClientList;
