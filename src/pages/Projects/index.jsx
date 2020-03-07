import React, { Fragment } from 'react';
import { Hero } from '../../shared/components';
import { ProjectIntro, MediaLarge } from '../../shared/components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { NotFound } from '../';

/** Individual project page */
const Project = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Lewis Needham - Front End Developer</title>
        <meta name="description" content="Portfolio of Lewis Needham - Front End Developer. Experienced JavaScript (ES6+) and React developer based in Toronto, ON." />
      </Helmet>
      
      {!props.project ? <Fragment>
        <div>404</div>
      </Fragment> : (
        <Fragment>
          <Helmet>
            <title>Lewis Needham - {props?.project?.fields?.name} Project</title>
            <meta name="description" content={props?.project?.fields?.technologyList ? `Technologies: ${props?.project?.fields?.technologyList.join(' ')}` : 'Portfolio of Lewis Needham - Front End Developer. Experienced JavaScript (ES6+) and React developer based in Toronto, ON.'}/>
          </Helmet>
          <Hero>
            <ProjectIntro
              name={props?.project?.fields?.name}
              tagline={props?.project?.fields?.tagline}
              desc={props?.project?.fields?.desc}
              sideList={props?.project?.fields?.technologyList}
              date={props?.project?.fields?.date}
              buttons={props?.project?.fields?.buttons}
            />
          </Hero>
          {props?.project?.fields?.mediaEntries?.map((media, index) => (
            <MediaLarge
              key={index}
              contentType={media?.fields?.media?.fields?.file?.contentType}
              bgColor={media?.fields?.backgroundColor}
              src={media?.fields?.media?.fields?.file.url}
              alt={media?.fields?.media?.fields?.title}
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

/** Projects component provides routing and loading states to project pages */
const Projects = props => {
  if (props.projects.isLoaded && props.projects.items.length && props.match) {
    const matchingProject = props.projects.items.find(item => item.fields.path === props.match.params.path);
    return matchingProject 
      ? <Project {...props} project={matchingProject} />
      : <NotFound text="Project does not exist" />;
  } else {
    if (!props.projects.isLoaded) return <NotFound text="Loading..." />;
    if (props.projects.isLoaded && !props.projects.items.length) return <NotFound text="Project does not exist" />;
  }
};

/**
 * Must be connected to Redux store so Routes can be
 * re-generated as the projects load in from Contentful.
 */
const mapStateToProps = state => ({...state});
export default connect(mapStateToProps)(Projects);
