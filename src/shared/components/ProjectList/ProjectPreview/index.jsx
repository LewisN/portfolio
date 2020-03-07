import React, { forwardRef } from 'react';
import {
  StyledProjectPreview,
  StyledProjectPreviewInner,
  StyledCaption,
  StyledIcon,
} from './Styles';
import { Icon } from '../../';

const ProjectPreview = forwardRef((props, ref) => (
  <StyledProjectPreview
    onMouseEnter={props.focusOnTarget}
    onMouseLeave={props.resetFocus}
    ref={ref}
  >
    <StyledProjectPreviewInner background={props.project.fields.previewImage.fields.file.url}>
      <StyledCaption>
        <div>
          <h2>{props.project.fields.name}</h2>
        </div>
      </StyledCaption>
      <StyledIcon>
        <Icon
          name='rightArrow'
          color='#FFF'
        />
      </StyledIcon>
    </StyledProjectPreviewInner>
  </StyledProjectPreview>
));
 
export default ProjectPreview;
