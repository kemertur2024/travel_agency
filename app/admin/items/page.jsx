"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsAdminPage() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");

    const fetchItems = async () => {
        const query = filter === "all" ? "" : `?type=${filter}`;
        const res = await fetch(`/api/items${query}`);
        let data = [];
        try {
            data = await res.json();
            console.log("Fetched items:", data);
        } catch (err) {
            console.error("Ошибка при разборе JSON:", err);
        }
        if (!Array.isArray(data)) data = []; // безопасно
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, [filter]);

    return (
        <div>
            <h1>Управление услугами</h1>

            {/* Фильтры по типу */}
            <div style={{ marginBottom: "1rem" }}>
                <button onClick={() => setFilter("all")}>Все</button>
                <button onClick={() => setFilter("excursion")}>
                    Экскурсии
                </button>
                <button onClick={() => setFilter("yacht")}>Яхты</button>
                <button onClick={() => setFilter("car")}>Авто</button>
            </div>

            <Link href='/admin/items/new'>
                <button>Добавить новый</button>
            </Link>

            {/* Таблица */}
            <table
                border='1'
                cellPadding='8'
                style={{ width: "100%", marginTop: "1rem" }}
            >
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тип</th>
                        <th>Слаг</th>
                        <th>Цена</th>
                        <th>Название (RU)</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.type}</td>
                            <td>{item.slug}</td>
                            <td>{item.price}</td>
                            <td>{item.title.ru}</td>
                            <td>
                                <Link href={`/admin/items/${item.slug}`}>
                                    <button>Редактировать</button>
                                </Link>
                                <button
                                    onClick={async () => {
                                        if (confirm("Удалить этот элемент?")) {
                                            await fetch(
                                                `/api/items/${item.slug}`,
                                                { method: "DELETE" }
                                            );
                                            fetchItems();
                                        }
                                    }}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
