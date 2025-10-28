import { useEffect, useRef } from "react";
import style from "./FormField.module.css";

export default function JsonField({ field, value, onChange }) {
    const textareaRef = useRef(null);

    // авторасширение высоты при вводе
    useEffect(() => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
        }
    }, [value]);

    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label} (JSON)
                    {field.required && " *"}
                </label>
            )}

            <textarea
                ref={textareaRef}
                className={style.textarea}
                placeholder='{"key": "value"}'
                value={value ?? ""}
                onChange={(e) => onChange(field, e.target.value)}
                spellCheck={false}
            />

            {/* простая проверка на валидный JSON */}
            {value &&
                (() => {
                    try {
                        JSON.parse(value);
                        return null;
                    } catch {
                        return (
                            <span className={style.error}>
                                Некорректный JSON
                            </span>
                        );
                    }
                })()}
        </div>
    );
}
