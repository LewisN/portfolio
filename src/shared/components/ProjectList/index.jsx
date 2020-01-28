import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectPreview from './ProjectPreview'
import { StyledProjectList } from './Styles';

const projects = [
  {
    name: 'Project 1',
    img: '',
    caption: 'Desc',
  },
  {
    name: 'Project 2',
    img: '',
    caption: 'Desc',
  },
  {
    name: 'Project 3',
    img: '',
    caption: 'Desc',
  },
  {
    name: 'Project 4',
    img: '',
    caption: 'Desc',
  },
  {
    name: 'Project 5',
    img: '',
    caption: 'Desc',
  },
  {
    name: 'Project 6',
    img: '',
    caption: 'Desc',
  },
];

/**
 * @class ProjectList
 * @extends {Component}
 */
class ProjectList extends Component {
  render() {
    return (
      <StyledProjectList>
        {projects.map((project) => (
          <li>
            <ProjectPreview
              key={project.name}
              name={project.name}
              caption={project.caption}
            ></ProjectPreview>
          </li>
        ))}
      </StyledProjectList>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(ProjectList);
