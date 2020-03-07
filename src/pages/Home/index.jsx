import React, { useEffect, Fragment } from 'react';
import {
  ProjectList,
  ContactForm,
  Tagline,
  SocialIcons,
  Hero,
} from '../../shared/components';
import {
  Container,
  SocialIconsContainer,
  StyledHeading,
  StyledSection,
} from './Styles';
import { Helmet } from 'react-helmet';

const Home = (props) => {
  useEffect(() => {
    /*
      Decode entities in the URL
      Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    */
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        const anchorElement = document.querySelector(`#${hash}`);
        if (anchorElement) anchorElement.scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  });

  return (
    <Fragment>
      <Helmet>
        <title>Lewis Needham - Front End Developer</title>
        <meta name="description" content="Portfolio of Lewis Needham - Front End Developer. Experienced JavaScript (ES6+) and React developer based in Toronto, ON." />
      </Helmet>

      <Hero>
        <Tagline />
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
      </Hero>

      <Container>
          <StyledSection id="projects">
            <StyledHeading>Projects</StyledHeading>
            <ProjectList />
          </StyledSection>

          <StyledSection id="contact">
            <StyledHeading>Get in touch</StyledHeading>
            <ContactForm />
          </StyledSection>
      </Container>
    </Fragment>
  );
}

export default Home;
