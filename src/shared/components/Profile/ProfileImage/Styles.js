import styled from 'styled-components';

export const StyledProfileImage = styled.div`
  height: 100%;
  position: relative;
`;

export const StyledImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.img});
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  height: 90%;
  width: 90%;
  transform: translate(-50%, -50%) rotate(-5deg);
  border: 2px solid white;
  border-radius: 3px;
`;

export const StyledBackground = styled.div`
  background-color: ${props => props.theme.palette.accent};
  height: 100%;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  min-height: 350px;
`;
