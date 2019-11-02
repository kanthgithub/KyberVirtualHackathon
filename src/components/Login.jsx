import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    autobind(this);
  }

  render() {
    return <div></div>;
  }
}

export default Login;
