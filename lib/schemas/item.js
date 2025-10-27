// lib/schemas/Item.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// Список поддерживаемых языков
export const SUPPORTED_LANGUAGES = ["ru", "en"]; // потом можно расширять

// Шаблон мультиязычного текста
const i18nString = {};
SUPPORTED_LANGUAGES.forEach(
    (lang) => (i18nString[lang] = { type: String, required: true })
);

// Универсальная схема сущности
const itemSchema = new Schema({
    type: { type: String, required: true }, // excursion, yacht, car и т.д.
    slug: { type: String, required: true, unique: true },

    title: i18nString, // мультиязычный заголовок
    description: i18nString, // мультиязычное описание

    price: { type: Number }, // если нужно
    duration: { type: String }, // если нужно, например для экскурсий

    images: [{ type: String }], // ссылки на фото (Cloudinary)

    // дополнительные поля можно добавлять динамически
    attributes: { type: Schema.Types.Mixed }, // универсальные поля под любую сущность

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Автоматическое обновление даты
itemSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

export default models.Item || model("Item", itemSchema);
