"use client";

import Link from "next/link";
import cl from "./AdminForm.module.css";

export default function AdminPage() {
    async function handleLogout() {
        const ok = confirm("Вы действительно хотите выйти?");
        if (!ok) return;

        try {
            const res = await fetch("/api/admin/logout", {
                method: "POST",
            });

            if (res.ok) {
                // Перенаправляем на логин
                window.location.href = "/admin/login";
            } else {
                alert("Не удалось выйти, попробуйте снова");
            }
        } catch (err) {
            console.error(err);
            alert("Ошибка при выходе");
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.form}>
                <h1 className={cl.title}>Админка</h1>
                <p className={cl.subtitle}>Выберите раздел для управления:</p>

                <ul className={cl.list}>
                    <li>
                        <Link href='/admin/items'>
                            <button className={cl.button}>
                                Управление услугами
                            </button>
                        </Link>
                    </li>
                    <br />
                    <br />
                    <li>
                        <button
                            className={`${cl.button} ${cl.logoutButton}`}
                            onClick={handleLogout}
                        >
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
