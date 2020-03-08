import React, { useRef, useEffect } from 'react';
import Form from './Form';
import { FormContainer } from './Styles';
import { fadeInFromBottom } from '../../timelines';
import ScrollMagic from 'scrollmagic';


const ContactForm = props => {
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

  // Names must be unique as they are IDs
  const fields = [
    {
      name: 'Name',
      initialValue: '',
      component: 'TextInput',
    },
    {
      name: 'Email',
      initialValue: '',
      component: 'TextInput',
    },
    {
      name: 'Message',
      initialValue: '',
      component: 'TextArea',
    }
  ];

  return (
    <FormContainer
      ref={self}
      {...props}
    >
      <Form fields={fields} />
    </FormContainer>
  );
};

export default ContactForm;
