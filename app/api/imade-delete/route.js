import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Item from "@/models/Item"; // твоя модель

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Подключение к MongoDB (если ещё нет глобального подключения)
async function connectDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const public_id = searchParams.get("public_id");
        const itemId = searchParams.get("itemId"); // передаем id документа
        if (!public_id || !itemId) {
            return NextResponse.json(
                { error: "public_id или itemId не передан" },
                { status: 400 }
            );
        }

        // 1. Удаляем с Cloudinary
        await cloudinary.uploader.destroy(public_id);

        // 2. Удаляем из массива images документа
        await connectDB();
        await Item.updateOne(
            { _id: itemId },
            { $pull: { images: { public_id } } }
        );

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("❌ Ошибка удаления:", err);
        return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
    }
}
