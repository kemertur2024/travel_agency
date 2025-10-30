"use client";
import { useState } from "react";
import cl from "./page.module.css";

export default function AdminLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            window.location.href = "/admin";
        } else {
            setError("Неверный логин или пароль");
        }
    }

    return (
        <div className={cl.wrapper}>
            <form className={cl.form} onSubmit={handleSubmit}>
                <h1 className={cl.title}>Вход в админку</h1>

                <input
                    type='text'
                    placeholder='Логин'
                    className={cl.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Пароль'
                    className={cl.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' className={cl.button}>
                    Войти
                </button>

                {error && <p className={cl.error}>{error}</p>}
            </form>
        </div>
    );
}
