"use client";

import cl from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    );
}
