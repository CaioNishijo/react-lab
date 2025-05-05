import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" />Home</li>
                <li><Link to="/ex1" />Exercício 1</li>
                <li><Link to="/ex2" />Exercício 2</li>
            </ul>
        </nav>
    );
}

export default Home;