import React, { useEffect } from 'react';
import { Layout, ProjectList, ContactForm, Tagline, SocialIcons, Hero } from '../../shared/components';
import { Container, SocialIconsContainer } from './Styles';
import { Helmet } from 'react-helmet';

const Home = () => {
  useEffect(() => {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
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
    <Layout>
      <Helmet>
        <title>Lewis Needham - Front End Developer</title>
        <meta name="description" content="Portfolio of Lewis Needham - Front End Developer based in Toronto." />
      </Helmet>

      <Hero>
        <Tagline />
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
      </Hero>
      <ProjectList id="projects" />
      <Container id="contact">
        <ContactForm />
      </Container>
    </Layout>
  );
}

export default Home;
