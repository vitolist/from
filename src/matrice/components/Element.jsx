import React from 'react';
import styles from '../styles/Main.module.css';

const Element = ({ id, value, index, setIndex, operation }) => {
    return (
        <span className={index != -1 && index == id + 1 ?
            `${styles.element} ${styles.element_hover}` :
            styles.element}
            onMouseEnter={() => setIndex(id + 1)}
            onMouseLeave={() => setIndex(-1)}>{(operation == "-" && value >= 0) ? <span style={{ color: "#FFFFFF00" }}>-</span> : ""}{value}</span >
    )
}

export default Element;