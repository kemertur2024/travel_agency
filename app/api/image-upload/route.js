import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json(
                { error: "Файл не передан" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

        // Загружаем в Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(base64, {
            folder: "travel_agency/items",
        });
        return NextResponse.json({
            url: uploadResponse.secure_url,
            public_id: uploadResponse.public_id,
        });
    } catch (err) {
        console.error("❌ Ошибка Cloudinary upload:", err);
        return NextResponse.json({ error: "Ошибка загрузки" }, { status: 500 });
    }
}
