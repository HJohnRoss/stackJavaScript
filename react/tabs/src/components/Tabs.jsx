import React, { useState } from 'react';
import styles from './css/Tabs.module.css'

const Tabs = (prop) => {
    
    const changeTab = (e) => {
        prop.setTab(e.target.value);

    }
    return (
        <div>
            {
                prop.tabSize.map((item, i) =>
                    <button key={i} onClick={changeTab} value={item}>{item}</button>)
            }
        </div>
    );
}

export default Tabs;