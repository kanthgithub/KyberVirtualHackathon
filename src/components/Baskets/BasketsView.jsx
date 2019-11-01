import React from "react";
import isEmpty from 'lodash/isEmpty';

import styles from './Baskets.module.css';
import ZapFullView from './ZapFullView';
import NavBar from '../Navbar';
import '../../App.css';

const BasketsView = ({ ...props }) => {
    const { basketData: { name, components, isOrderable, description} } = props;

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
            />
          </div>
          </div>
      );
    }
    return null;
};

export default BasketsView;
