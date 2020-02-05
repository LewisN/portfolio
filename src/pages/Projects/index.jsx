import React, { Fragment } from 'react';
import { Layout, Hero } from '../../shared/components';
import { ProjectIntro, MediaLarge } from '../../shared/components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { NotFound } from '../';
import { PROJECTS_PATH } from '../../constants/paths';

const Project = props => {
  return (
    <Layout>
      <Helmet>
        <title>Lewis Needham - Front End Developer</title>
        <meta name="description" content="Portfolio of Lewis Needham - Front End Developer based in Toronto." />
      </Helmet>
      
      {!props.project ? <Fragment>
        <div>404</div>
      </Fragment> : (
        <Fragment>
          <Helmet>
            <title>Lewis Needham - {props.project.fields.name} Project</title>
            <meta name="description" content={props.project.fields.technologyList ? `Technologies: ${props.project.fields.technologyList.join(' ')}` : 'Portfolio of Lewis Needham - Front End Developer based in Toronto.'}/>
          </Helmet>
          <Hero>
            <ProjectIntro
              name={props.project.fields.name}
              desc={props.project.fields.desc}
              sideList={props.project.fields.technologyList}
              buttons={props.project.fields.buttons}
            />
          </Hero>
          {props.project.fields.mediaEntries.map((media, index) => (
            <MediaLarge
              key={index}
              contentType={media.fields.media.fields.file.contentType}
              bgColor={media.fields.backgroundColor}
              src={media.fields.media.fields.file.url}
              alt={media.fields.media.fields.title}
            />
          ))}
        </Fragment>
      )}
    </Layout>
  );
};

/**
 * Projects component should only provide routing and loading states to
 * Project pages, nothing more.
 */
const Projects = props => (
  <Fragment>
    {!props.projects.isLoaded && <NotFound text="Loading..." />}

    {props.projects.isLoaded && props.projects.items.length && 
      <Route path={`${PROJECTS_PATH}/:path`} render={routeProps => {
        const { path } = routeProps.match.params;
        const matchingProject = props.projects.items.find(item => item.fields.path === path);
        return matchingProject ? <Project {...props} project={matchingProject} /> : <NotFound text="Project does not exist" />;
      }} />
    }

    {props.projects.isLoaded && !props.projects.items.length &&
      <NotFound text="Project does not exist" />
    }
  </Fragment>
);

/**
 * Must be connected to Redux store so Routes can be
 * re-generated as the projects load in from Contentful.
 */
const mapStateToProps = state => ({...state});
export default connect(mapStateToProps)(Projects);
