import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectPreview from '../ProjectPreview'
import './Styles';

/**
 * @class ProjectList
 * @extends {Component}
 */
class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <ProjectPreview />
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(ProjectList);
