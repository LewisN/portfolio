import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyledProjectList } from './Styles';
import { PROJECTS_PATH } from '../../../constants/paths';
import { connect } from 'react-redux';
import ProjectPreview from './ProjectPreview'

const ProjectList = props => (
  <Fragment>
    {props.isLoaded && props.items.length && (
      <StyledProjectList {...props}>
        {props.items.map(project => (
          <li key={project.fields.name}>
            <Link to={`${PROJECTS_PATH}/${project.fields.path}`}>
              <ProjectPreview project={project} />
            </Link>
          </li>
        ))}
      </StyledProjectList>
    )}
  </Fragment>
);

const mapStateToProps = state => ({ ...state.projects });

export default connect(mapStateToProps)(ProjectList);
