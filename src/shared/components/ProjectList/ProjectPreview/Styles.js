import styled from 'styled-components';


export const StyledCaption = styled.div`
  text-align: center;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-image: linear-gradient(rgba(46,30,30,0) 40%,rgba(0, 0, 0, 0.82));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;

  h2 {
    font-size: 2.4rem;
    line-height: 3rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-style: italic;
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
  background-image: url(${props => props.background});
  padding: 0 1rem;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

  &:hover ${StyledCaption} {
    opacity: 1;
    transition: all 0.7s ease;
  }
`;


export const StyledProjectPreview = styled.div`
  display: block;
  height: 250px;
  color: #fafafa;
  position: relative;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 330px;
  }

  a {
    color: #fafafa;
  }
`;