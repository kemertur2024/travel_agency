"use client";

import { useState } from "react";
import { ITEM_FIELDS } from "@/components/admin/itemFields";
import { initializeItem } from "@/helpers/initializeItem";
import FieldRenderer from "@/components/admin/inputs/FieldRenderer";
import style from "@/components/admin/inputs/FormField.module.css";

export default function ItemForm({ onSubmit, initialItem = null }) {
    const [item, setItem] = useState(() => {
        const base = initialItem
            ? { ...initializeItem(ITEM_FIELDS), ...initialItem }
            : initializeItem(ITEM_FIELDS);
        return base;
    });

    const handleChange = (field, value, lang) => {
        if (field.type.startsWith("i18n")) {
            setItem((prev) => ({
                ...prev,
                [field.name]: { ...prev[field.name], [lang]: value },
            }));
        } else {
            setItem((prev) => ({ ...prev, [field.name]: value }));
        }
    };

    const tabs = Array.from(new Set(ITEM_FIELDS.map((f) => f.tab || "Прочее")));
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(item);
            }}
            className={style.form}
        >
            {/* --- Табы --- */}
            <div className={style.tabs}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        type='button'
                        onClick={() => setActiveTab(tab)}
                        className={
                            tab === activeTab
                                ? `${style.tabButton} ${style.tabButtonActive}`
                                : style.tabButton
                        }
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* --- Поля формы --- */}
            {ITEM_FIELDS.filter((f) => f.tab === activeTab).map((field) => (
                <FieldRenderer
                    key={field.name}
                    field={field}
                    value={item[field.name]}
                    item={item}
                    onChange={handleChange}
                    setItem={setItem}
                />
            ))}

            <button type='submit' className={style.submitButton}>
                💾 Сохранить
            </button>
        </form>
    );
}
