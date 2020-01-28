import styled from 'styled-components';


export const Caption = styled.div`
  margin: auto;
  text-align: center;

  @media (min-width: 992px) {
    opacity: 0;
  }
`;

export const StyledProjectPreviewInner = styled.div`
  position: absolute;
  display: flex;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateZ(0);
  background-image: url('https://picsum.photos/400/400');

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #333;
    opacity: 0.85;
  }

  @media (min-width: 992px) {
    /* Animation */
    vertical-align: middle;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    transition-property: color;
    transition-duration: 0.4s;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #dc133b;
      opacity: 0.9;
      transform: scale(0);
      transition-property: transform;
      transition-duration: 0.4s;
      transition-timing-function: ease-out;
    }

    &:hover:before {
      transform: scale(1);
    }
  }

  &:hover ${Caption} {
    opacity: 1;
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    -o-transition: all 0.7s ease;
  }
`;


export const StyledProjectPreview = styled.div`
  display: block;
  background: grey;
  height: 300px;
  color: #fafafa;
  position: relative;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 450px;
  }

  a {
    color: #fafafa;
  }
`;