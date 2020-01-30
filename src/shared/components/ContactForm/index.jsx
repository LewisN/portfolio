import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormContainer, Form, StyledErrorMessage } from './Styles';
import { Formik } from 'formik';
import { Button, TextInput, TextArea } from '../';

/**
 * @class ContactForm
 * @extends {Component}
 */
class ContactForm extends Component {
  render() {
    return (
      <FormContainer>
        <h3>Get in touch</h3>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validate={values => {
            let errors = {};
            let emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', 'i');

            if (!values.name) {
              errors.name = "Please enter a name";
            } else if (values.name.length > 30) {
              errors.name = "Please enter a shorter name";
            }
    
            if (!values.email) {
              errors.email = "Please enter an email address";
            } else if (!emailRegex.test(values.email)) {
              errors.email = "Please check your email address for mistakes";
            }

            if (!values.message) {
              errors.message = "Please enter a message";
            } else if (values.name.length > 5000) {
              errors.message = 'Please enter a shorter message (max characters: 5000)';
            }

            return errors;
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              {/* NAME */}
              <label htmlFor='name'>Name</label>
              {errors.name && touched.name && (
                <StyledErrorMessage>{errors.name}</StyledErrorMessage>
              )}
              <TextInput
                id='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? 'text-input error'
                    : 'text-input'
                }
              />

              {/* EMAIL ADDRESS */}
              <label htmlFor='email'>Email</label>
              {errors.email && touched.email && (
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
              )}
              <TextInput
                id='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />

              {/* MESSAGE */}
              <label htmlFor='message'>Message</label>
              {errors.message && touched.message && (
                <StyledErrorMessage>{errors.message}</StyledErrorMessage>
              )}
              <TextArea
                id='message'
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.message
                    ? 'text-input error'
                    : 'text-input'
                }
              />

              <Button
                primary
                type='submit'
                disabled={isSubmitting}
                text={isSubmitting ? 'Sending...' : 'Send'}
              />
            </Form>
          )}
        />
      </FormContainer>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(ContactForm);
