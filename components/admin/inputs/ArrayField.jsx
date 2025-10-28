export default function ArrayField({ field, item, setItem }) {
    // массив объектов
    if (field.fields) {
        return (
            <div>
                <label>{field.label}:</label>
                {item[field.name].map((obj, idx) => (
                    <div
                        key={idx}
                        style={{
                            border: "1px dashed #aaa",
                            padding: "0.5rem",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {field.fields.map((sub) => (
                            <div key={sub.name}>
                                <label>{sub.label}:</label>
                                <input
                                    type='text'
                                    value={obj[sub.name] ?? ""}
                                    onChange={(e) => {
                                        const newArr = [...item[field.name]];
                                        newArr[idx] = {
                                            ...newArr[idx],
                                            [sub.name]: e.target.value,
                                        };
                                        setItem((prev) => ({
                                            ...prev,
                                            [field.name]: newArr,
                                        }));
                                    }}
                                />
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={() => {
                                const newArr = [...item[field.name]];
                                newArr.splice(idx, 1);
                                setItem((prev) => ({
                                    ...prev,
                                    [field.name]: newArr,
                                }));
                            }}
                        >
                            Удалить
                        </button>
                    </div>
                ))}
                <button
                    type='button'
                    onClick={() => {
                        setItem((prev) => ({
                            ...prev,
                            [field.name]: [
                                ...prev[field.name],
                                field.fields.reduce((acc, f) => {
                                    acc[f.name] = f.default ?? "";
                                    return acc;
                                }, {}),
                            ],
                        }));
                    }}
                >
                    Добавить {field.label}
                </button>
            </div>
        );
    }

    // массив строк
    return (
        <div>
            <label>{field.label}:</label>
            {item[field.name].map((val, idx) => (
                <input
                    key={idx}
                    value={val ?? ""}
                    onChange={(e) => {
                        const newArr = [...item[field.name]];
                        newArr[idx] = e.target.value;
                        setItem((prev) => ({ ...prev, [field.name]: newArr }));
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
