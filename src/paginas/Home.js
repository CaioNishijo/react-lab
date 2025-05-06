import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/ex1" >Exercício 1</Link></li>
                <li><Link to="/ex2" >Exercício 2</Link></li>
            </ul>
        </nav>
    );
}

export default Home;