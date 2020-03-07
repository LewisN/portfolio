import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from './shared/styles/globalStyles';
import configureStore from './store';
import theme from './shared/styles/theme';
import { fetchProjects } from './actions';
import { ScrollToTop, Layout } from './shared/components';
import { PROJECTS_PATH } from './constants/paths';
import { Home, Projects, NotFound } from './pages';

const store = configureStore();
store.dispatch(fetchProjects())

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={`${PROJECTS_PATH}/:path`}>
              {({ match }) => <Projects match={match} />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
