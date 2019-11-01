import React from "react";
import isEmpty from 'lodash/isEmpty';

import ZapFullView from './ZapFullView';
import NavBar from '../Navbar';

const BasketsView = ({ ...props }) => {
    const { basketData: { name, components, isOrderable} } = props;

    if(!isEmpty(props.basketData)) {
        return (
          <div>
            <NavBar />
            <ZapFullView
              name={name}
              components={components}
              isOrderable={isOrderable}
            />
          </div>
      );
    }
    return null;
};

export default BasketsView;
