import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledProjectList } from './Styles';
import { PROJECTS_PATH } from '../../../constants/paths';
import { connect } from 'react-redux';
import ProjectPreview from './ProjectPreview'
import gsap from 'gsap';

const ProjectList = props => {
  const projects = useRef([]);

  /**
   * Focus animation on the current target
   * @param {Object} e event object
   */
  const focusOnTarget = e => {
    // Shrink all projects
    gsap.to(projects.current, {
      scale: .95,
      ease: 'power3.out',
    });

    // Grow currently selected project
    gsap.to(e.currentTarget, {
      scale: 1.1,
      ease: 'power3.out',
      overwrite: true,
    });
  };

  /** Reset the focus to default */
  const resetFocus = () => {
    gsap.to(projects.current, {
        scale: 1,
        ease: 'power1.in',
        onComplete: () => {
            /*
              Make sure elements exist before attempting to animate them or GSAP will
              throw an error. This can happen if the page changes and the ref is cleared
              before the onComplete callback runs
            */
            if (projects.current && projects.current.length && projects.current[0] instanceof HTMLElement) {
              gsap.set(projects.current, { clearProps: 'all' })
            }
        },
    });
  };

  return (
    <Fragment>
      {props.isLoaded && props.items.length && (
          <StyledProjectList
            {...props}
          >
            {props.items.map((project, index) => (
              <li key={project.fields.name}>
                <Link to={`${PROJECTS_PATH}/${project.fields.path}`}>
                  <ProjectPreview
                    focusOnTarget={focusOnTarget}
                    resetFocus={resetFocus}
                    project={project}
                    ref={el => projects.current[index] = el}
                  />
                </Link>
              </li>
            ))}
          </StyledProjectList>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({ ...state.projects });

export default connect(mapStateToProps)(ProjectList);
