import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '@containers/auth';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  static routesFunction() {
    return (
      <Scene
        key="root"
        panHandlers={null} // for disable swiping back in IOS
        duration={0} // to avoid sliding animation on IOS
        hideNavBar="hideNavBar"
        hideTabBar="hideTabBar"
      >
        <Scene key="Login" title="Login" initial component={Login} />
        
      </Scene>
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading === true) {
      return null;
    }
    return (
      <Router>
        { Routes.routesFunction() }
      </Router>
    );
  }
}

export default Routes;
