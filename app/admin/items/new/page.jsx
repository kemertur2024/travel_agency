"use client";
import { useRouter } from "next/navigation";
import ItemForm from "@/components/admin/ItemForm";
import style from "@/app/admin/AdminForm.module.css";

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
        <div className={style.adminPage}>
            <div className={style.adminHeader}>
                <h1 className={style.pageTitle}>Создать новую услугу</h1>
                <button
                    className={style.closeButton}
                    onClick={() => router.push("/admin/items")}
                >
                    ✕
                </button>
            </div>

            <ItemForm onSubmit={handleSubmit} />
        </div>
    );
}
