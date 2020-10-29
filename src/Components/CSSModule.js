import React from 'react';
import styles from './modulestyle.module.css';
const CSSModule=()=>{
    return(
        <div className={`${styles.largeFont} ${styles.greenColor}`}>
            CSS MODULE
        </div>
    )
}
export default CSSModule;