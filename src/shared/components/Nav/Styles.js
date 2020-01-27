import styled from 'styled-components';

export const NavIconInner = styled.span`
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

export const NavIcon = styled.button`
  display: inline-block;
  width: 25px;
  height: 25px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

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

  ${(props) => props.open ? `
    ${NavIconInner} {
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