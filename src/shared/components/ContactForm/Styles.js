import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 5rem auto;
  max-width: 550px;
`;

export const Form = styled.form`
  display: inline-block;
  width: 100%;
  text-align: left;

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 200px;
    resize: none;
  }

  input,
  textarea {
    margin-bottom: 20px;
  }

  button[type="submit"] {
    display: block;
    margin: 10px auto 0;
  }
`;

export const StyledErrorMessage = styled.div`
  color: ${props => props.theme.palette.error};
`;
