import style from "./FormField.module.css";

export default function TextareaField({ field, value, onChange }) {
    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label}
                    {field.required && " *"}
                </label>
            )}
            <textarea
                value={value ?? ""}
                placeholder={field.placeholder || ""}
                onChange={(e) => onChange(field, e.target.value)}
                className={style.textarea}
            />
        </div>
    );
}
