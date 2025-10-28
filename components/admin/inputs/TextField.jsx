import style from "./FormField.module.css";

export default function TextField({ field, value, onChange }) {
    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label}
                    {field.required && " *"}
                </label>
            )}
            <input
                type={field.type === "number" ? "number" : "text"}
                value={value ?? ""}
                placeholder={field.placeholder || ""}
                onChange={(e) => onChange(field, e.target.value)}
                className={style.input}
            />
        </div>
    );
}
