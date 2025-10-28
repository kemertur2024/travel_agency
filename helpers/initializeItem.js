/**
 * Инициализация объекта формы по полям ITEM_FIELDS и дефолтам
 * @param {Array} fields - массив полей (ITEM_FIELDS)
 * @param {Object} data - существующие данные для инициализации
 * @returns {Object} item
 */
export function initializeItem(fields, data = {}) {
    const item = {};

    fields.forEach((field) => {
        const value = data[field.name];

        switch (field.type) {
            case "i18n":
            case "i18n-textarea":
                item[field.name] = value ?? structuredClone(field.default);
                break;

            case "array":
                if (field.fields?.length) {
                    // массив объектов
                    item[field.name] =
                        Array.isArray(value) && value.length
                            ? value.map((v) => initializeItem(field.fields, v))
                            : [{}];
                } else {
                    // массив строк
                    item[field.name] = value ?? [...field.default];
                }
                break;

            case "uploader":
                // аплоадер — массив объектов
                item[field.name] =
                    Array.isArray(value) && value.length
                        ? value.map((v) => initializeItem(field.fields, v))
                        : [{}];
                break;

            case "json":
                item[field.name] = value ?? {};
                break;

            default:
                item[field.name] = value ?? field.default ?? "";
                break;
        }
    });

    return item;
}
