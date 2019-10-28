import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import ZapListView from './ZapListView';

class ZapListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        autobind(this);
    };

    render() {
        return (
            <ZapListView/>
        );
    }
}

export default ZapListContainer;
