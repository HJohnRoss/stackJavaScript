import React, { useState } from 'react';
import styles from './css/Blocks.module.css'

const Blocks = (prop) => {
    const [color, setColor] = useState("");

    const [boxes, setBoxes] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleAddColor = (e) => {
        e.preventDefault();
        boxes.push(color);
        setBoxes([...boxes]);
    }

    const boxStyle = (oneColor) => {
        let boxStyling = {
            border: "1px solid black",
            width: "100px",
            backgroundColor: oneColor,
            height: "100px"
        }
        return boxStyling
    };

    return (
        <div>
            <form action="" onSubmit={handleAddColor}>
                <div className={styles.dFlex}>
                    <label htmlFor="Color">Color </label>
                    <input type="text" htmlFor="Color" onChange={handleColor} />
                </div>
                <div className={styles.center}>
                    <button>Add</button>
                </div>
            </form>
            <div className={styles.dFlex}>
                {
                    boxes.map((item, i) =>
                        <div key={i} style={boxStyle(item)}></div>)
                }
            </div>
        </div>
    );
}


export default Blocks;