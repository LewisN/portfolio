import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Styles';

/**
 * @class ProjectPreview
 * @extends {Component}
 */
class ProjectPreview extends Component {
  render() {
    return (
      <div className="ProjectPreview">
        ProjectPreview
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(ProjectPreview);
