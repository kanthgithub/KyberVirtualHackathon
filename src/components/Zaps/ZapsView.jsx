import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import ZapFullView from './ZapFullView';
import NavigationBar from '../NavigationBar';

import '../../App.css';
import {
  INDIVIDUAL_ZAP_PAGE,
  GENERATE_ZAP
} from '../../constants/googleAnalytics';
import { registerEvent } from '../../api/googleAnalytics';

const ZapsView = props => {
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
        <Row className="justify-content-center">
          <Button
            variant="outline-info"
            target="_blank"
            size="lg"
            href="https://defizap.typeform.com/to/UZSZg5"
            type="link"
            onClick={() =>
              registerEvent({
                category: GENERATE_ZAP,
                action: INDIVIDUAL_ZAP_PAGE
              })
            }
          >
            Don&apos;t see your Zap? Submit a request and we will create one!
          </Button>
        </Row>
      </Container>
    );
  }
  return null;
};

export default ZapsView;
