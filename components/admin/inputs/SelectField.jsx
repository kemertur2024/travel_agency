import style from "./FormField.module.css";

export default function SelectField({ field, value, onChange }) {
    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label}
                    {field.required && " *"}
                </label>
            )}
            <select
                value={value ?? ""}
                onChange={(e) => onChange(field, e.target.value)}
                className={style.select}
            >
                <option value=''>— выберите —</option>
                {field.options?.map((opt) => {
                    // поддержка и строк, и объектов { value, label }
                    const optionValue =
                        typeof opt === "string" ? opt : opt.value;
                    const optionLabel =
                        typeof opt === "string" ? opt : opt.label;
                    return (
                        <option key={optionValue} value={optionValue}>
                            {optionLabel}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
