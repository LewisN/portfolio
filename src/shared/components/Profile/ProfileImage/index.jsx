import React from 'react';
import { StyledProfileImage, StyledImage, StyledBackground } from './Styles';

const ProfileImage = () => {
  return (
    <StyledProfileImage>
      <StyledBackground />
      <StyledImage img={require('../../../assets/profile.jpg')} />
    </StyledProfileImage>
  );
};

export default ProfileImage;
