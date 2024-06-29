import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import CountLeadLayout from "./layouts/count-lead";
import SessionTable from "views/admin/session/components/sessionTable";
import SessionDetails from "views/admin/session/components/sessionDetails";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/count-lead`} component={CountLeadLayout} />
            {/* Adding routes for session table and details */}
            <Route
              path={`/session/:id`}
              render={() => (
                <AdminLayout>
                  <SessionDetails />
                </AdminLayout>
              )}
            />
            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </ErrorBoundary>
  </ChakraProvider>,
  document.getElementById("root")
);