import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledProjectPreview, StyledProjectPreviewInner, Caption } from './Styles';

/**
 * @class ProjectPreview
 * @extends {Component}
 */
class ProjectPreview extends Component {
  render() {
    return (
      <StyledProjectPreview>
        <StyledProjectPreviewInner>
          <Caption>
            <h3>{this.props.name}</h3>
            <p>{this.props.caption}</p>
          </Caption>
        </StyledProjectPreviewInner>
      </StyledProjectPreview>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(ProjectPreview);
