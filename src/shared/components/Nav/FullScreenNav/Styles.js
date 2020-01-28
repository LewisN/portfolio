import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #dc133b;
  z-index: 5;
  margin: 0 auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0s 0.5s;

  ${(props) => props.navIsOpen ? `
    opacity: 0.95;
    visibility: visible;
    transition: opacity 0.5s;
  ` : ''}
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 4.5rem;
  font-weight: 600;
  margin: 0 auto;

  ul {
    list-style-type: none;
    padding: 0;
    font-family: source_sans_probold, arial, sans-serif;
    line-height: normal;

    li {
      margin: 20px 0;
    }
  }

  a {
    color: #fafafa;
    display: inline-block;  
    text-decoration: none;

    &:after {
      content: '';
      display: block;
      height: 10px;
      width: 0;
      background: transparent;
      transition: width .5s ease, background-color .5s ease;
    }

    &:hover {
      text-decoration: none;
      color: #222;
      
      &:after {
        width: 100%;
        background: #222;    
      }
    }
  }
`;
