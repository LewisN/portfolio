import styled from 'styled-components';

export const HamburgerLine = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #222;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
  
  &:nth-child(1) {
    top: 0px;
  }

  &:nth-child(2) {
    top: 8px;
  }

  &:nth-child(3) {
    top: 8px;
  }

  &:nth-child(4) {
    top: 16px;
  }
`;

export const HamburgerInner = styled.div`
  display: inline-block;
  width: 25px;
  height: 21px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
`;

export const StyledHamburger = styled.button`
  /* Button Reset */
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  display: inline-block;
  background: white;
  border-radius: 3px;
  padding: 1rem;
  line-height: 0;
  cursor: pointer;
  outline: none;

  ${(props) => props.navIsOpen ? `
    ${HamburgerLine} {
      background: black !important; 
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
        background: #fefefe;
      }
    
      &:nth-child(2) {
        top: 8px;
        transform: rotate(45deg);
        background: #fefefe;
      }
    
      &:nth-child(3) {
        top: 8px;
        transform: rotate(-45deg);
        background: #fefefe;
      }
    
      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
        background: #fefefe;
      }
    }
  ` : ''};
`;
