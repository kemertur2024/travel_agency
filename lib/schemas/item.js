// lib/schemas/Item.js
import mongoose from "mongoose";

const { Schema } = mongoose;

// Список поддерживаемых языков
export const SUPPORTED_LANGUAGES = ["ru", "en"]; // позже можно расширять

// Шаблон мультиязычного текста
const i18nString = {};
SUPPORTED_LANGUAGES.forEach(
    (lang) => (i18nString[lang] = { type: String, required: true })
);

// Универсальная схема сущности
const itemSchema = new Schema({
    type: { type: String, required: true }, // excursion, yacht, car и т.д.
    category: [{ type: String }],
    slug: { type: String, required: true, unique: true },

    title: i18nString, // мультиязычный заголовок
    description: i18nString, // мультиязычное описание
    label: i18nString, // метка (например, скидка, новинка)

    price: { type: Number },
    oldprice: { type: Number },
    duration: { type: String },

    images: [{ type: String }], // ссылки на фото (Cloudinary)
    attributes: { type: Schema.Types.Mixed }, // дополнительные поля

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Автоматическое обновление даты
itemSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

// Безопасная инициализация модели
const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
