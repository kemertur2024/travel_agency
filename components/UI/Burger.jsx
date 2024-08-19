"use client";

import { useState } from "react";
import "./Burger.css";

export default function Burger({ toggleNav }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurger = () => {
        setIsOpen(!isOpen);
        toggleNav();
    };

    return (
        <div
            id='burger'
            className={`burger ${isOpen ? "open" : ""}`}
            onClick={toggleBurger}
        >
            <div className='burger_brick'></div>
            <div className='burger_brick middle'></div>
            <div className='burger_brick'></div>
        </div>
    );
}
