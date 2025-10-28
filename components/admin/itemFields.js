import { SUPPORTED_LANGUAGES } from "@/lib/constants/supportedLanguages";

const i18nDefaults = {};
SUPPORTED_LANGUAGES.forEach((lang) => (i18nDefaults[lang] = ""));

export const ITEM_FIELDS = [
    // --- Основное ---
    {
        name: "type",
        label: "Тип",
        type: "select",
        options: ["excursion", "yacht", "car", "villa"],
        default: [],
        tab: "Основное",
    },
    { name: "slug", label: "Slug", type: "text", default: "", tab: "Основное" },
    {
        name: "price",
        label: "Цена",
        type: "number",
        default: 0,
        tab: "Основное",
    },
    {
        name: "oldprice",
        label: "Старая цена",
        type: "number",
        default: 0,
        tab: "Основное",
    },
    {
        name: "duration",
        label: "Длительность",
        type: "text",
        default: "",
        tab: "Основное",
    },

    // --- Контент ---
    {
        name: "title",
        label: "Название",
        type: "i18n",
        default: i18nDefaults,
        tab: "Контент",
    },
    {
        name: "label",
        label: "Ярлык",
        type: "i18n",
        default: i18nDefaults,
        tab: "Контент",
    },
    {
        name: "description",
        label: "Описание",
        type: "i18n-textarea",
        default: i18nDefaults,
        tab: "Контент",
    },

    // --- Изображения ---
    {
        name: "images",
        label: "Изображения",
        type: "uploader",
        default: [{}],
        tab: "Изображения",
        fields: [
            { name: "url", type: "string", label: "URL", default: "" },
            {
                name: "public_id",
                type: "string",
                label: "Public ID",
                default: "",
            },
            { name: "alt", type: "string", label: "Alt текст", default: "" },
        ],
    },

    // --- Категории ---
    {
        name: "category",
        label: "Категории",
        type: "checkbox-group",
        options: [
            { value: "excursion", label: "Экскурсия" },
            { value: "rent_yacht", label: "Яхты" },
            { value: "rent_auto", label: "Авто" },
            { value: "rent_villa", label: "Виллы" },
            { value: "transfers", label: "Трансфер" },
            { value: "from_kemer", label: "Из Кемера" },
            { value: "from_alania", label: "Из Алании" },
            { value: "from_side", label: "Из Сиде" },
            { value: "rom_antalia", label: "Из Анталии" },
            { value: "from_belek", label: "Из Белека" },
            { value: "from_marmaris", label: "Из Мармариса" },
            { value: "popular", label: "Популярные" },
            { value: "shopping", label: "Шоппинг" },
            { value: "individual", label: "Индивидуальные" },
            { value: "vip", label: "Vip" },
        ],
        default: [],
        tab: "Категории",
    },

    // --- Прочее ---
    {
        name: "attributes",
        label: "Attributes",
        type: "json",
        default: {},
        tab: "Дополнительно",
    },
];
