import React from "react";
import isEmpty from 'lodash/isEmpty';
import Row from 'react-bootstrap/Row';
import styles from './Baskets.module.css';
import ZapFullView from './ZapFullView';
import NavBar from '../Navbar';
import '../../App.css';
import Button from "react-bootstrap/Button";

const BasketsView = ({ ...props }) => {
    const { basketData: { name, components, isOrderable, description, id } } = props;

    if(!isEmpty(props.basketData)) {
        return (
          <div
            className="hero-image"
            style={{
            height: "1000px",
            marginBottom: "100px"
            }}
          >
          <div className={styles.containerPadding} style={{ paddingTop: "150px" }}>
            <NavBar />
            <ZapFullView
              name={name}
              components={components}
              isOrderable={isOrderable}
              description={description}
              id={id}
            />
          </div>
          <Row className="justify-content-center">
            <Button
            variant='outline-info'
            target="_blank"
            href='https://defizap.typeform.com/to/UZSZg5'
            type='link'
            >
              Don't see your Zap? Submit a request and we will create one!
            </Button>
            </Row>
          </div>
      );
    }
    return null;
};

export default BasketsView;
