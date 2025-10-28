// clearImages.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./lib/schemas/item.js"; // путь к схеме

dotenv.config();

const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travel_agency";

async function clearImages() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected");

        const result = await Item.updateMany({}, { $unset: { images: "" } });
        console.log(
            "✅ Поле images удалено у документов:",
            result.modifiedCount
        );

        await mongoose.disconnect();
        console.log("✅ MongoDB disconnected");
    } catch (err) {
        console.error("❌ Ошибка:", err);
        process.exit(1);
    }
}

clearImages();
