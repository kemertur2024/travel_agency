"use client";

import { useState } from "react";
import "./Burger.css";

export default function Burger({ toggleNav, isNavOpen }) {
    return (
        <div
            id='burger'
            className={`burger ${isNavOpen ? "open" : ""}`}
            onClick={toggleNav}
        >
            <div className='burger_brick'></div>
            <div className='burger_brick middle'></div>
            <div className='burger_brick'></div>
        </div>
    );
}
