import styled from 'styled-components';

export const StyledForm = styled.form`
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

  ${props => props.contactFormLocked ? `
    background: red;
  ` : ''}
`;

export const StyledErrorMessage = styled.div`
  color: ${props => props.theme.palette.error};
  margin-top: 1rem;
`;

export const StyledSuccessMessage = styled.div`
  color: ${props => props.theme.palette.success};
  margin-top: 1rem;
`;
