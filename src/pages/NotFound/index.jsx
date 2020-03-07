import React, { Fragment } from 'react';
import { Hero } from '../../shared/components';
import { Container } from './Styles'
import { Helmet } from 'react-helmet';
import { StyledTitle } from './Styles';

const NotFound = props => (
  <Fragment>
    <Helmet>
      <title>404 | lewisneedham.com</title>
    </Helmet>

    <Hero>
      <Container>
        <StyledTitle>
          {props.text ? props.text : '404 - Page Not Found'}
        </StyledTitle>
      </Container>
    </Hero>
  </Fragment>
);

export default NotFound;
