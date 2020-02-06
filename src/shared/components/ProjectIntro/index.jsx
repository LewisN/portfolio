import React from 'react';
import { StyledIntro, StyledTitle, StyledDesc, StyledList, StyledButtons, StyledButtonContainer } from './Styles';
import Button from '../Button';

const ProjectIntro = props => (
  <StyledIntro>
    <StyledTitle>{props.name}</StyledTitle>
    {props?.desc ? (
      <StyledDesc dangerouslySetInnerHTML={{
        __html: props.desc,
      }}>
      </StyledDesc>
    ) : ''}

    {props?.sideList ? (
      <StyledList>
        <h3>
          Technologies:
        </h3>
        <ul>
          {props?.sideList?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </StyledList>
    ) : ''}

    {props?.buttons ? (
      <StyledButtonContainer>
        <StyledButtons>
          {props?.buttons?.map(button => (
            <Button
              key={button.text}
              text={button.text}
              href={button.link}
            />
          ))}
        </StyledButtons>
      </StyledButtonContainer>
    ) : ''}
  </StyledIntro>
);

export default ProjectIntro;
