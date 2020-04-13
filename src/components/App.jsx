import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { CssBaseline, Container } from "@material-ui/core";
import Help from "./Help";
import Wallet from "./Wallet";
import CreateAddress from "./CreateAddress";
import { TestSuiteRun } from "./TestSuiteRun";
import ScriptExplorer from "./ScriptExplorer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorNotification } from "./ErrorNotification";

const App = () => (
  <div className="App">
    <CssBaseline />
    <Container maxWidth="lg">
      <Navbar />
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/test" component={TestSuiteRun} />
            <Route path="/create" component={CreateAddress} />
            <Route path="/script" component={ScriptExplorer} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/help" component={Help} />
            <Route path="/" component={Help} />
          </Switch>
        </Router>
        <ErrorNotification />
      </ErrorBoundary>
      <Footer />
    </Container>
  </div>
);

export default App;
