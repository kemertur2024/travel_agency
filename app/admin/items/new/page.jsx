"use client";
import { useRouter } from "next/navigation";
import ItemForm from "@/components/admin/ItemForm";

export default function NewItemPage() {
    const router = useRouter();

    const handleSubmit = async (data) => {
        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) router.push("/admin/items");
        else {
            const err = await res.json();
            alert(err.error || "Ошибка при создании");
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Создать новую услугу</h1>
            <ItemForm onSubmit={handleSubmit} />
        </div>
    );
}
