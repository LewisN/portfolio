import React from 'react';
import { StyledMediaLarge, StyledMediaLargeInner, StyledMediaLargeMarkup } from './Styles';

const MediaLarge = props => {
  return (
  <StyledMediaLarge color={props.bgColor}>
    <StyledMediaLargeInner>
      {/image\/.+/.test(props.contentType) &&
        <img alt={props.alt} src={props.src} />
      }

      {props.contentType === 'markup' &&
        <StyledMediaLargeMarkup dangerouslySetInnerHTML={{__html: props.src}}></StyledMediaLargeMarkup>
      }

      {/video\/.+/.test(props.contentType) &&
        <video controls>
          <source src={props.src} type={props.contentType}/>
        </video>
      }
    </StyledMediaLargeInner>
  </StyledMediaLarge>
  );
}

export default MediaLarge;
