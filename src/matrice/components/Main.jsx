import { React, useState, useEffect } from 'react';
import styles from '../styles/Main.module.css';
import Element from './Element';

const Main = () => {

    const [m, setM] = useState(0);
    const [n, setN] = useState(0);
    const [matrix1, setMatrix1] = useState([]);
    const [matrix2, setMatrix2] = useState([]);
    const [result, setResult] = useState([]);
    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(-1);
    const [index3, setIndex3] = useState(-1);
    const [selected, setSelected] = useState(false);
    const [operation, setOperation] = useState("");

    const random = (bound) => {
        return Math.trunc(Math.floor(Math.random() * bound));
    }

    const randomArray = (size) => {
        const array = Array(size).fill().map(() => random(5));
        // console.log(array);
        return array;
    }

    const generateMatrix = (m, n, set) => {
        const mat = Array(m).fill().map(() => randomArray(n));
        // console.log(mat);
        set(mat);
    }

    const check = (mat1, mat2) => {
        if (mat1.length != mat2.length) {
            console.log(`m1 != m2`);
            return false;
        }
        else {
            if (mat1[0].length != mat2[0].length) {
                console.log(`n1 != n2`);
                return false;
            }
            else {
                return true;
            }
        }
    }

    const add = (mat1, mat2) => {
        if (check(mat1, mat2)) {
            setOperation("+");
            const m = mat1.length;
            const n = mat1[0].length;
            const mat = Array(m).fill().map(() => Array(n));

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    mat[i][j] = mat1[i][j] + mat2[i][j];
                }
            }

            // console.log(mat);
            return mat;
        }
        return [];
    }

    const sub = (mat1, mat2) => {
        if (check(mat1, mat2)) {
            setOperation("-");
            const m = mat1.length;
            const n = mat1[0].length;
            const mat = Array(m).fill().map(() => Array(n));

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    mat[i][j] = mat1[i][j] - mat2[i][j];
                }
            }

            // console.log(mat);
            return mat;
        }
        return [];
    }

    return (
        <div style={{ 'fontFamily': 'consolas' }}>
            <p>{m} {n}</p>
            <button className={styles.btn} onClick={
                () => {
                    setM(random(10) + 1);
                }
            }>random m</button>

            <button className={styles.btn} onClick={
                () => {
                    setN(random(10) + 1);
                }
            }>random n</button>

            <button className={styles.btn} onClick={
                () => {
                    generateMatrix(m, n, setMatrix1);
                }
            }>generiraj matricu 1</button>

            <button className={styles.btn} onClick={
                () => {
                    generateMatrix(m, n, setMatrix2);
                }
            }>generiraj matricu 2</button>

            <button className={styles.btn} onClick={
                () => {
                    setM(random(10) + 1);
                    setN(random(10) + 1);
                }
            }>generiraj m n</button>

            <button className={styles.btn} onClick={
                () => {
                    setResult(add(matrix1, matrix2));
                }
            }>zbroji</button>

            <button className={styles.btn} onClick={
                () => {
                    setResult(sub(matrix1, matrix2));
                }
            }>oduzmi</button>

            <input type="number" min={0} max={9} onChange={(e) => { e.preventDefault(); setM(parseInt(e.target.value)); }} />
            <input type="number" min={0} max={9} onChange={(e) => { e.preventDefault(); setN(parseInt(e.target.value)); }} />

            <div className={styles.matrices}>
                <div className={styles.matrix}>
                    {matrix1.map((row, i) => (
                        <div className={styles.row} key={i}>
                            {row.map((element, j) => (
                                <Element key={j} {...{ id: j, value: element, index: index1, setIndex: setIndex1, operation: "" }}></Element>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={styles.matrix}>
                    {matrix2.map((row, i) => (
                        <div className={styles.row} key={i}>
                            {row.map((element, j) => (
                                <Element key={j} {...{ id: j, value: element, index: index2, setIndex: setIndex2, operation: "" }}></Element>
                            ))}
                        </div>
                    ))}
                </div>

                {matrix1.length > 0 && matrix2.length > 0 && result.length > 0 ? <div className={styles.matrix}>
                    {result.map((row, i) => (
                        <div className={styles.row} key={i}>
                            {row.map((element, j) => (
                                <Element key={j} {...{ id: j, value: element, index: index3, setIndex: setIndex3, operation: operation }}></Element>
                            ))}
                        </div>
                    ))}
                </div> : <div>prazno</div>}

                {/* <p>{index1} {operation} {index2}</p> */}
            </div>
        </div>
    )
}


export default Main;