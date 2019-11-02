import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import isEmpty from 'lodash/isEmpty';

import BasketsView from './BasketsView';
import Baskets from '../../constants/Baskets';

class BasketsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      basketData: {}
    };
    autobind(this);
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    const basketData = Baskets[id];
    if (!isEmpty(basketData)) {
      this.setState({ basketData });
    }
  };

  render() {
    const { basketData } = this.state;
    return <BasketsView basketData={basketData} />;
  }
}

export default BasketsContainer;
