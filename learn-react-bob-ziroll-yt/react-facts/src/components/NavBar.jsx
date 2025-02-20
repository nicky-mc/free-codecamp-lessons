import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
             <img className="reactLogo" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React Logo" />
            <h1>Welcome to React</h1>
            <div className="explainer">
                <p>This is a custom component</p>
                <br />
                <p>It has its own styling and is imported into App.jsx</p>
            </div>
            <ul className="linkList">
                <li className='link'>
                    <Link to="/">Home</Link>
                </li>
                <li className='link'>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}