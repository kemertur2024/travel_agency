"use client";

import Link from "next/link";
import style from "@/app/admin/AdminForm.module.css";

export default function AdminPage() {
    return (
        <div className={style.adminPage}>
            <h1 className={style.pageTitle}>Админка</h1>
            <p>Выберите раздел для управления:</p>

            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <li>
                    <Link href='/admin/items'>
                        <button className={style.addButton}>
                            Управление услугами
                        </button>
                    </Link>
                </li>
                {/* Можно добавить другие разделы */}
                {/* <li>
                    <Link href="/admin/users">
                        <button className={style.addButton}>Пользователи</button>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
}
