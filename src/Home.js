import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>projekti</h1>
            <ul>
                <li><a href="src/big.html">The Notorious B.I.G.</a></li>
                {/* <li><a href="src/matrice/index.html">matrice</a></li> */}
                <li><Link to="/matrice" >matrice</Link></li>
                <li><a href="src/mynameis/index1.html">Hi! My name is</a></li>
                {/* <li><a href="src/bozic/bozic.html">Dani do bozica</a></li> */}
                <li><Link to="/bozic" >bozic</Link></li>
                <li><a href="src/nas/index.html" >Nas</a></li>
            </ul>
        </div>
    )
}

export default Home;