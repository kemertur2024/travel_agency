"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import style from "@/app/admin/AdminForm.module.css";
import { useRouter } from "next/navigation";

export default function ItemsAdminPage() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc"); // asc / desc
    const router = useRouter();

    const fetchItems = async () => {
        const query = filter === "all" ? "" : `?type=${filter}`;
        const res = await fetch(`/api/items${query}`);
        let data = [];
        try {
            data = await res.json();
        } catch (err) {
            console.error("Ошибка при разборе JSON:", err);
        }
        if (!Array.isArray(data)) data = [];

        if (sortField) {
            data.sort((a, b) => {
                const getValue = (obj, path) => {
                    return path
                        .split(".")
                        .reduce((acc, key) => acc?.[key], obj);
                };
                const valA = getValue(a, sortField) ?? "";
                const valB = getValue(b, sortField) ?? "";
                if (typeof valA === "string") {
                    return sortOrder === "asc"
                        ? valA.localeCompare(valB)
                        : valB.localeCompare(valA);
                }
                return sortOrder === "asc" ? valA - valB : valB - valA;
            });
        }

        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, [filter, sortField, sortOrder]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    const filters = [
        { label: "Все", value: "all" },
        { label: "Экскурсии", value: "excursion" },
        { label: "Яхты", value: "yacht" },
        { label: "Авто", value: "car" },
        { label: "Виллы", value: "villa" },
    ];

    return (
        <div className={style.adminPage}>
            <div className={style.adminHeader}>
                <h1 className={style.pageTitle}>Управление услугами</h1>

                <button
                    className={style.addButton}
                    onClick={() => {
                        if (window.confirm("Создать новый элемент?")) {
                            router.push("/admin/items/new");
                        }
                    }}
                >
                    +
                </button>
                <button
                    className={style.closeButton}
                    onClick={() => router.push("/admin")}
                >
                    ✕
                </button>
            </div>

            <div className={style.filters}>
                {filters.map((f) => (
                    <button
                        key={f.value}
                        className={`${style.tabButton} ${
                            filter === f.value ? style.tabButtonActive : ""
                        }`}
                        onClick={() => setFilter(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Обёртка для горизонтального скролла только таблицы */}
            <div className={style.tableWrapper}>
                <table className={style.itemsTable}>
                    <thead>
                        <tr>
                            {[
                                { label: "№", field: "_id" },
                                // { label: "Тип", field: "type" },
                                { label: "Слаг", field: "slug" },
                                { label: "Цена", field: "price" },
                                { label: "Название (RU)", field: "title.ru" },
                            ].map(({ label, field }) => (
                                <th
                                    key={field}
                                    onClick={() => handleSort(field)}
                                >
                                    {label}{" "}
                                    {sortField === field && (
                                        <span>
                                            {sortOrder === "asc" ? "▲" : "▼"}
                                        </span>
                                    )}
                                </th>
                            ))}
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                {/* <td>{item.type}</td> */}
                                <td>
                                    <Link href={`/admin/items/${item.slug}`}>
                                        {item.slug}
                                    </Link>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.title.ru}</td>
                                <td>
                                    <Link href={`/admin/items/${item.slug}`}>
                                        <button
                                            className={`${style.actionButton} ${style.editButton}`}
                                        >
                                            ✏️
                                        </button>
                                    </Link>
                                    <button
                                        className={`${style.actionButton} ${style.deleteButton}`}
                                        onClick={async () => {
                                            if (
                                                confirm("Удалить этот элемент?")
                                            ) {
                                                await fetch(
                                                    `/api/items/${item.slug}`,
                                                    {
                                                        method: "DELETE",
                                                    }
                                                );
                                                fetchItems();
                                            }
                                        }}
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
