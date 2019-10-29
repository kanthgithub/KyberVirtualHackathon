import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import FaqView from './FaqView';

class FaqContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        autobind(this);
    };

    render() {
        return <FaqView />
    }
}

export default FaqContainer;
