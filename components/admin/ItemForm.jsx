import { useState } from "react";
import { SUPPORTED_LANGUAGES } from "@/lib/constants/supportedLanguages";
import { ITEM_FIELDS } from "@/components/admin/itemFields";

function initializeItem() {
    const item = {};

    ITEM_FIELDS.forEach((field) => {
        switch (field.type) {
            case "i18n":
                item[field.name] = {};
                SUPPORTED_LANGUAGES.forEach((lang) => {
                    item[field.name][lang] = "";
                });
                break;

            case "array":
                item[field.name] = [];
                break;

            case "json":
                item[field.name] = "{}";
                break;

            default:
                item[field.name] = "";
        }
    });

    return item;
}

export default function ItemForm({ onSubmit, initialItem = null }) {
    const [item, setItem] = useState(() => {
        if (initialItem) {
            // Для i18n полей, если данных нет — инициализируем пустыми строками
            ITEM_FIELDS.forEach((field) => {
                if (field.type === "i18n") {
                    initialItem[field.name] = initialItem[field.name] || {};
                    SUPPORTED_LANGUAGES.forEach((lang) => {
                        if (!(lang in initialItem[field.name])) {
                            initialItem[field.name][lang] = "";
                        }
                    });
                }
                if (field.type === "array" && !initialItem[field.name]) {
                    initialItem[field.name] = [];
                }
                if (field.type === "json" && !initialItem[field.name]) {
                    initialItem[field.name] = "{}";
                }
            });
            return initialItem;
        }
        return initializeItem();
    });

    const handleChange = (field, value, lang) => {
        if (field.type === "i18n") {
            setItem((prev) => ({
                ...prev,
                [field.name]: { ...prev[field.name], [lang]: value },
            }));
        } else if (field.type === "json") {
            setItem((prev) => ({ ...prev, [field.name]: value }));
        } else {
            setItem((prev) => ({ ...prev, [field.name]: value }));
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(item);
            }}
        >
            {ITEM_FIELDS.map((field) => {
                if (field.type === "i18n") {
                    return (
                        <div
                            key={field.name}
                            style={{
                                border: "1px solid #ccc",
                                padding: "0.5rem",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <label>{field.label}:</label>
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <div key={lang} style={{ marginTop: "0.5rem" }}>
                                    <label>{lang.toUpperCase()}:</label>
                                    <textarea
                                        value={item[field.name]?.[lang] || ""}
                                        onChange={(e) =>
                                            handleChange(
                                                field,
                                                e.target.value,
                                                lang
                                            )
                                        }
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                }

                if (field.type === "array") {
                    return (
                        <div key={field.name}>
                            <label>{field.label}:</label>
                            {item[field.name].map((val, idx) => (
                                <input
                                    key={idx}
                                    value={val}
                                    onChange={(e) => {
                                        const newArr = [...item[field.name]];
                                        newArr[idx] = e.target.value;
                                        setItem((prev) => ({
                                            ...prev,
                                            [field.name]: newArr,
                                        }));
                                    }}
                                />
                            ))}
                            <button
                                type='button'
                                onClick={() =>
                                    setItem((prev) => ({
                                        ...prev,
                                        [field.name]: [...prev[field.name], ""],
                                    }))
                                }
                            >
                                Добавить
                            </button>
                        </div>
                    );
                }

                if (field.type === "json") {
                    return (
                        <div key={field.name}>
                            <label>{field.label} (JSON):</label>
                            <textarea
                                value={item[field.name]}
                                onChange={(e) =>
                                    handleChange(field, e.target.value)
                                }
                                placeholder='{"key":"value"}'
                                style={{ width: "100%", height: "80px" }}
                            />
                        </div>
                    );
                }

                if (field.type === "select") {
                    return (
                        <div key={field.name}>
                            <label>{field.label}:</label>
                            <select
                                value={item[field.name]}
                                onChange={(e) =>
                                    handleChange(field, e.target.value)
                                }
                            >
                                {field.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );
                }

                if (field.type === "checkbox-group") {
                    return (
                        <div key={field.name}>
                            <label>{field.label}</label>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                }}
                            >
                                {field.options.map((opt) => (
                                    <label key={opt.value}>
                                        <input
                                            type='checkbox'
                                            checked={
                                                Array.isArray(
                                                    item[field.name]
                                                ) &&
                                                item[field.name].includes(
                                                    opt.value
                                                )
                                            }
                                            onChange={(e) => {
                                                const current = Array.isArray(
                                                    item[field.name]
                                                )
                                                    ? [...item[field.name]]
                                                    : [];
                                                if (e.target.checked) {
                                                    current.push(opt.value);
                                                } else {
                                                    const i = current.indexOf(
                                                        opt.value
                                                    );
                                                    if (i > -1)
                                                        current.splice(i, 1);
                                                }
                                                setItem({
                                                    ...item,
                                                    [field.name]: current,
                                                });
                                            }}
                                        />
                                        {opt.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    );
                }

                return (
                    <div key={field.name}>
                        <label>{field.label}:</label>
                        <input
                            type={field.type}
                            value={item[field.name]}
                            onChange={(e) =>
                                handleChange(field, e.target.value)
                            }
                        />
                    </div>
                );
            })}

            <button type='submit'>Сохранить</button>
        </form>
    );
}
