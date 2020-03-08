import React, { useState } from 'react';
import {
  StyledForm,
  StyledErrorMessage,
  StyledSuccessMessage,
} from './Styles';
import { Formik } from 'formik';
import { Button, TextInput, TextArea } from '../../';

/**
 * @param {Array.<Object>} fields 
 * @returns {Object}
 */
const getInitialValues = fields =>
fields.reduce((acc, field) => {
  return {...acc, [field.name]: field.initialValue};
}, {});

/**
 * Contact form
 * @param {Object} props
 * @param {Object[]} props.fields Fields that will be present in the form
 * @param {String} props.fields[].name Field name - must be unique as it will be used as an ID
 * @param {String} props.fields[].initialValue Initial value of the field
 * @param {String} props.fields[].component Field component name as a string
 */
const Form = props => {
  const stringToComponentMap = {
    'TextInput': TextInput,
    'TextArea': TextArea,
  };

  // Set initial state
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleFormSubmission = (values, { setSubmitting, isSubmitting }) => {
    setSubmitting(true);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://e6iyuj4e3g.execute-api.us-east-1.amazonaws.com/dev/staticSiteMailer', true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(values));
    xhr.onloadend = response => {
      setSubmitting(false);
      handleFormResponse(response);

      // Lock further form submissions for 20 seconds to prevent spam
      setLocked(true);
      setTimeout(() => {
        setLocked(false)
      }, 20000);
    };
  };

  const handleFormResponse = response => {
    if (response.target.status === 200) {
      setSubmissionSuccess(true);
      if (submissionError) setSubmissionError(false);
    } else {
      setSubmissionError(true);
      if (submissionSuccess) setSubmissionSuccess(false);
      try {
        console.error(JSON.parse(response.target.response).message);
      } catch (err) {}
    }
  };

  const handleValidation = values => {
    let errors = {};
    let emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', 'i');

    if (!values.Name) {
      errors.Name = "Please enter a name";
    } else if (values.name.length > 30) {
      errors.Name = "Please enter a shorter name";
    }

    if (!values.Email) {
      errors.Email = "Please enter an email address";
    } else if (!emailRegex.test(values.email)) {
      errors.Email = "Please check your email address for mistakes";
    }

    if (!values.Message) {
      errors.Message = "Please enter a message";
    } else if (values.name.length > 5000) {
      errors.Message = 'Please enter a shorter message (max characters: 5000)';
    }

    return errors;
  };

  const FormComponent = ({
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => {
    return (
    <StyledForm onSubmit={handleSubmit}>
      {props.fields.map(field => {
        const { name, component } = field;
        const FieldComponent = stringToComponentMap[component];

        return <div key={name}>
          <label htmlFor={name}>{name}</label>
          
          {errors[name] &&
          touched[name] &&
          <StyledErrorMessage>{errors[name]}</StyledErrorMessage>}

          <FieldComponent
            id={name}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[name] && touched[name]}
            valid={touched[name] && values[name] && !errors[name]}
            disabled={locked || isSubmitting}
          />
        </div>
      })}

      {!submissionSuccess && (
        <Button
          type='submit'
          disabled={isSubmitting}
          text={submissionError ? 'Try again' : (isSubmitting ? 'Sending...' : 'Send')}
        />
      )}

      {submissionSuccess && <StyledSuccessMessage>Thanks for getting in touch. I'll get back to you with a reply as soon as I can <span aria-label="smiling face emoji" role="img">😁</span></StyledSuccessMessage>}
      {submissionError && <StyledErrorMessage>Sorry! It seems something is wrong with the contact form. Please email me directly at hello@lewisneedham.com</StyledErrorMessage>}
    </StyledForm>
    );
  }

  return (
    <Formik
      initialValues={getInitialValues(props.fields)}
      validate={handleValidation}
      onSubmit={handleFormSubmission}
      component={FormComponent}
    />
  );
};

export default Form;
