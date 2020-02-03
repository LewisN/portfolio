import React from 'react';
import Form from './Form';
import {
  FormContainer,
  StyledFormHeader,
} from './Styles';

const ContactForm = props => {
  /* Names must be unique as they are IDs */
  const fields = [
    {
      name: 'name',
      initialValue: '',
      component: 'TextInput',
    },
    {
      name: 'email',
      initialValue: '',
      component: 'TextInput',
    },
    {
      name: 'message',
      initialValue: '',
      component: 'TextArea',
    }
  ];

  return (
    <FormContainer {...props}>
      <StyledFormHeader>Get in touch</StyledFormHeader>
      <Form fields={fields} />
    </FormContainer>
  );
};

export default ContactForm;
