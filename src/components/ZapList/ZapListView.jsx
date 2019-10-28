import React from "react";

import ZapFullView from '../Baskets/ZapFullView';
import NavBar from '../Navbar';
import Zaps from '../../constants/Baskets';

import '../../App.css';
import styles from './ZapList.module.css';

const ZapListView = ({ ...props }) => {
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
            {Object.values(Zaps).map(zap => (
                <ZapFullView
                    name={zap.name}
                    components={zap.components}
                    isOrderable={zap.isOrderable}
                />
            ))}
          </div>
          </div>
      );
};

export default ZapListView;
