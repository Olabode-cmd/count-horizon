import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import SessionTable from 'views/admin/session/components/sessionTable';
import SessionDetails from 'views/admin/session/components/sessionDetails';
import { RoleProvider } from 'components/sidebar/components/RoleContext';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <React.StrictMode>
        <RoleProvider>
          <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RTLLayout} />
            {/* <Redirect from="/" to="/admin" /> */}
            <Route path="/session/:id" component={SessionDetails} />
          </Switch>
        </HashRouter>
        </RoleProvider>
      </React.StrictMode>
    </ErrorBoundary>
  </ChakraProvider>,
  document.getElementById("root")
);
