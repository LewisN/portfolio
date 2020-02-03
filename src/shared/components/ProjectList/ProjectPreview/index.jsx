import React from 'react';
import { StyledProjectPreview, StyledProjectPreviewInner, StyledCaption } from './Styles';

const ProjectPreview = props => (
  <StyledProjectPreview>
    <StyledProjectPreviewInner background={props.project.fields.previewImage.fields.file.url}>
      <StyledCaption>
        <h2>{props.project.fields.name}</h2>
        <p>{props.project.fields.previewCaption}</p>
      </StyledCaption>
    </StyledProjectPreviewInner>
  </StyledProjectPreview>
);
 
export default ProjectPreview;
