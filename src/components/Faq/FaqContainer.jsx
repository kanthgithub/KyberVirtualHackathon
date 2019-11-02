import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import Container from 'react-bootstrap/Container';

import NavigationBar from '../NavigationBar';
import FaqView from './FaqView';

class FaqContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    return (
      <Container>
        <NavigationBar />
        <FaqView defaultActiveKey="0" />
      </Container>
    );
  }
}

export default FaqContainer;
