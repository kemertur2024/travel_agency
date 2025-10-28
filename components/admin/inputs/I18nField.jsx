import { useEffect, useRef } from "react";
import { SUPPORTED_LANGUAGES } from "@/lib/constants/supportedLanguages";
import style from "./FormField.module.css";

export default function I18nField({ field, value, onChange }) {
    const [, innerType] = field.type.split("-");
    const textareasRef = useRef({});

    // Автоматическое изменение высоты textarea при вводе
    useEffect(() => {
        SUPPORTED_LANGUAGES.forEach((lang) => {
            const el = textareasRef.current[lang];
            if (el) {
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
            }
        });
    }, [value]);

    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label}
                    {field.required && " *"}
                </label>
            )}

            <div className={style.i18nGroup}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <div key={lang} className={style.i18nItem}>
                        <label className={style.label}>
                            {lang.toUpperCase()}:
                        </label>

                        {innerType === "textarea" ? (
                            <textarea
                                ref={(el) => (textareasRef.current[lang] = el)}
                                value={value?.[lang] || ""}
                                placeholder={field.placeholder || ""}
                                onChange={(e) =>
                                    onChange(field, e.target.value, lang)
                                }
                                className={style.textarea}
                            />
                        ) : (
                            <input
                                type='text'
                                value={value?.[lang] || ""}
                                placeholder={field.placeholder || ""}
                                onChange={(e) =>
                                    onChange(field, e.target.value, lang)
                                }
                                className={style.input}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
