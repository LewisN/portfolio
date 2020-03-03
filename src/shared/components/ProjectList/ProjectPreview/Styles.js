import styled from 'styled-components';

export const StyledCaption = styled.div`
  text-align: center;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 5px;

  h2 {
    font-size: 2.1rem;
    line-height: 3rem;
    margin: 0;
    display: inline;
    background-image: linear-gradient(to right, transparent 50%, ${props => props.theme.palette.accent} 50%);
    background-size: 200%;
    background-position: -100%;
    transition: all 0.4s;
    padding: 3px;
    opacity: 1;
    color: #FFF;
  }

  p {
    margin: 0;
    font-style: italic;
  }

  @media (min-width: 992px) {
    h2 {
      opacity: 0;
      background-position: 0;
    }
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  line-height: normal;
  display: none;

  svg {
    fill: ${props => props.theme.palette.accent};
    height: 3.5rem;
    background-color: white;
    border-radius: 50%;
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
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    background: #FFF;
  }

  @media (min-width: 992px) {
    filter: grayscale(100%);

    &:before {
      opacity: 0.7;
      transition-property: all;
      transition-duration: 0.1s;
      transition-timing-function: ease;
    }

    &:hover {
      filter: grayscale(0%);
      transition: all 0.1s ease;

      &:before {
        opacity: 0;
      }
    }
  }
`;

export const StyledProjectPreview = styled.div`
  display: block;
  height: 250px;
  color: ${props => props.theme.palette.secondary};
  position: relative;
  overflow: hidden;

  &:hover {
    ${StyledCaption} {
      h2 {
        background-position: -100%;
        color: #FFF;
        transition: all 0.5s;
        opacity: 1;
      }
    }

    ${StyledIcon} {
      display: block;
    }
  }

  @media (min-width: 992px) {
    height: 280px;
    border-radius: 4px;
  }

  a {
    color: #fafafa;
  }
`;
