// importExcursions.js
import mongoose from "mongoose";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Item from "./lib/schemas/item.js"; // путь к схеме

dotenv.config(); // <--- подключаем .env

// Для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Подключение к MongoDB (берём из .env)
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travel_agency"; // fallback на локальную MongoDB

async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected");

        // Читаем JSON-файл с экскурсиями
        const filePath = resolve(__dirname, "excursions_full.json");
        const rawData = fs.readFileSync(filePath, "utf-8");
        const excursions = JSON.parse(rawData);

        // Вставка с игнорированием дубликатов по slug
        for (const excursion of excursions) {
            await Item.updateOne(
                { slug: excursion.slug },
                { $set: excursion },
                { upsert: true }
            );
        }

        console.log(
            `✅ Импорт завершён: ${excursions.length} записей обработано`
        );

        await mongoose.disconnect();
        console.log("✅ MongoDB disconnected");
    } catch (err) {
        console.error("❌ Ошибка:", err);
        process.exit(1);
    }
}

main();
