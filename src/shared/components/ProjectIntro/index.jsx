import React from 'react';
import {
  StyledIntro,
  StyledTitle,
  StyledTagline,
  StyledDesc,
  StyledDescContainer,
  StyledList,
  StyledListSection,
  StyledButtons,
  StyledButtonContainer,
} from './Styles';
import Button from '../Button';

const ProjectIntro = props => (
  <StyledIntro>
    <StyledTitle>{props.name}</StyledTitle>
    <StyledTagline>{props.tagline}</StyledTagline>

    <StyledDescContainer>    
      <StyledList>
        {props?.sideList ? (
          <StyledListSection>
            <h3>Technologies</h3>
            <ul>
              {props?.sideList?.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StyledListSection>
        ) : ''}

        {props?.date ? (
          <StyledListSection>
            <h3>Year</h3>
            <ul>
              <li>{props?.date && new Date(props.date.toString()).getUTCFullYear()}</li>
            </ul>
          </StyledListSection>
        ) : ''}
      </StyledList>
    
      {props?.desc ? (
        <StyledDesc dangerouslySetInnerHTML={{
          __html: props.desc,
        }}>
        </StyledDesc>
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
    </StyledDescContainer>
  </StyledIntro>
);

export default ProjectIntro;
