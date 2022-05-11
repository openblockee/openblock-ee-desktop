import React from 'react';
import {productName} from '../../package.json';

import logo from '../icon/OpenBlockLoading.svg';
import subLogo from '../icon/OpenBlockLoading-sub.svg';
import styles from './loading.css';

const LoadingElement = () => (
    <div className={styles.loadingBox}>
        <img
            alt={`${productName} loading icon`}
            src={logo}
            className={styles.loadingLogo}
        />
        <img
            alt={`${productName} loading sub icon`}
            src={subLogo}
            className={styles.loadingLogo}
        />
    </div>
);

export default <LoadingElement />;
