"use client";

import cl from "./MyCustomButton.module.css";

export default function MyCustomButton({ children, ...props }) {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    );
}
