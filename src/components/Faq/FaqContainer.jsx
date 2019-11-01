import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import NavBar from '../Navbar';
import styles from './Faq.module.css';
import FaqView from './FaqView';

class FaqContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        autobind(this);
    };

    render() {
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
                    <br />
                    <FaqView style={{ color:'red' }} defaultActiveKey='0'/>
                </div>
            </div>
        );
    }
}

export default FaqContainer;
