import React from 'react';
import Form from './Form';
import { FormContainer } from './Styles';

const ContactForm = props => {
  /* Names must be unique as they are IDs */
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
    <FormContainer {...props}>
      <Form fields={fields} />
    </FormContainer>
  );
};

export default ContactForm;
