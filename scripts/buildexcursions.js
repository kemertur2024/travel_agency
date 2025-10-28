import fs from "fs";
import path from "path";
import { excursions } from "./lib/Excursions.js";

const SUPPORTED_LANGUAGES = ["ru", "en"];

// Функция для загрузки перевода из файла JSON
function loadJSON(lang, filename) {
    const filePath = path.join("./locales", lang, filename);
    if (!fs.existsSync(filePath)) return {};
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Загружаем названия и описания для каждого языка
const locales = {};
SUPPORTED_LANGUAGES.forEach((lang) => {
    locales[lang] = {
        names: loadJSON(lang, "excursionName.json"),
        descriptions: loadJSON(lang, "excursions.json"),
    };
});

const fullExcursions = excursions.map((exc) => {
    const title = {};
    const description = {};
    const label = {};

    SUPPORTED_LANGUAGES.forEach((lang) => {
        title[lang] = locales[lang].names[exc.nameKey] || exc.name;
        description[lang] =
            locales[lang].descriptions[exc.descriptionKey] || "";
        label[lang] = exc.label || "";
    });

    return {
        type: "excursion",
        category: exc.category,
        slug: exc.nameKey
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/gi, ""),
        title,
        description,
        label,
        price: exc.price,
        oldprice: exc.oldprice,
        images: exc.images,
        attributes: {},
    };
});

// Запишем в JSON-файл
fs.writeFileSync(
    "excursions_full.json",
    JSON.stringify(fullExcursions, null, 2),
    "utf-8"
);

console.log("Файл excursions_full.json создан с мультиязычными данными!");
