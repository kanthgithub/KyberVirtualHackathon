import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import NavBar from '../Navbar';
import FaqView from './FaqView';

class FaqContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        autobind(this);
    };

    render() {
        return (
                <>
                    <NavBar />
                    <br />
                    <FaqView defaultActiveKey='0'/>
                </>
        );
    }
}

export default FaqContainer;
