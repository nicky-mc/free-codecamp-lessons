import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <main>
            <h1 className="title">React Facts</h1>
            <ul className="home">
                <li>Was first released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has well over 2k stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of web apps as well as mobile ones</li>
            </ul>
        </main>
    );
}