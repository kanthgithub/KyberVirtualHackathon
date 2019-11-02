import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Container from 'react-bootstrap/Container';
import ZapFullView from './ZapFullView';
import NavigationBar from '../NavigationBar';

const BasketsView = props => {
  const {
    basketData: { name, components, isOrderable, description, id }
  } = props;

  if (!isEmpty(props.basketData)) {
    return (
      <Container>
        <NavigationBar />
        <ZapFullView
          key={name}
          name={name}
          components={components}
          isOrderable={isOrderable}
          description={description}
          id={id}
        />
      </Container>
    );
  }
  return null;
};

export default BasketsView;
