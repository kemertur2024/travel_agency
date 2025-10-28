"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ItemForm from "@/components/admin/ItemForm";

export default function EditItemPage({ params }) {
    const { slug } = params;
    const router = useRouter();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // загрузка данных элемента
        fetch(`/api/items/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    }, [slug]);

    const handleSubmit = async (updatedItem) => {
        await fetch(`/api/items/${slug}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedItem),
        });
        router.push("/admin/items");
    };

    if (loading) return <p>Загрузка...</p>;
    if (!item) return <p>Элемент не найден</p>;

    return (
        <div>
            <h1>Редактировать элемент</h1>
            <ItemForm initialItem={item} onSubmit={handleSubmit} />
        </div>
    );
}
