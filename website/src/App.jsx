import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import autobind from "react-autobind";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";

import "./App.css";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Baskets from "./pages/baskets";
import BasketDetails from "./pages/basket-details";
import GetStarted from "./pages/get-started";
import Analytics from "./pages/analytics";
import Survey from "./pages/survey";

class App extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      location: PropTypes.shape({ search: PropTypes.string }),
      listen: PropTypes.func,
      replace: PropTypes.func
    }).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/get-started" component={GetStarted} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/baskets" component={Baskets} />
          <Route exact path="/baskets/:id" component={BasketDetails} />
          <Route exact path="/analytics" component={Analytics} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
