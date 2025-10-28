"use client";

import Link from "next/link";

export default function AdminPage() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Админка</h1>
            <p>Выберите раздел для управления:</p>

            <ul>
                <li>
                    <Link href='/admin/items'>
                        <button>Управление услугами</button>
                    </Link>
                </li>
                {/* Можно добавить другие разделы */}
                {/* <li>
          <Link href="/admin/users"><button>Пользователи</button></Link>
        </li> */}
            </ul>
        </div>
    );
}
