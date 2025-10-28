import style from "./FormField.module.css";

export default function CheckboxGroupField({ field, value = [], setItem }) {
    const handleChange = (optionValue, checked) => {
        setItem((prev) => {
            const prevArr = prev[field.name] ?? [];
            const newArr = checked
                ? [...prevArr, optionValue]
                : prevArr.filter((v) => v !== optionValue);
            return { ...prev, [field.name]: newArr };
        });
    };

    return (
        <div className={style.field}>
            {field.label && (
                <label className={style.label}>
                    {field.label}
                    {field.required && " *"}
                </label>
            )}

            <div className={style.checkboxGroup}>
                {field.options.map((option) => (
                    <label key={option.value} className={style.checkboxItem}>
                        <input
                            type='checkbox'
                            value={option.value}
                            checked={value.includes(option.value)}
                            onChange={(e) =>
                                handleChange(option.value, e.target.checked)
                            }
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}
