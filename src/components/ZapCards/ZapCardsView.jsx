import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PercentageCircle from '../PercentageCircle';
import '../../App.css';

const ZapCardsView = props => {
  const {
    basketData: { name, components, id }
  } = props;

  if (!isEmpty(props.basketData)) {
    return (
      <Card className=" text-center justify-content-center">
        <Card.Body>
          <Card.Title className="my-4 font30">{name}</Card.Title>
          <div className="row justify-content-center flex flex-wrap">
            {components.map(({ ingredientName, percent }) => (
              <div key={ingredientName}>
                <PercentageCircle percentage={percent} color="#1314ad" />
                <h6 className="text-center mt-3">{ingredientName}</h6>
              </div>
            ))}
          </div>
          <div className="text-center justify-content-center">
            <Button href={`/zaps/${id}`} size="lg" variant="primary">
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default ZapCardsView;
