import React, { PureComponent } from "react";
import autobind from 'react-autobind';

import ZapListContainer from "../../components/ZapList/ZapListContainer";

class AllZaps extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      autobind(this);
    };

    render() {
      return (
        <ZapListContainer />
      );
    }
};

export default AllZaps;
