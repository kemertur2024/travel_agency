import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const { file } = await request.json(); // base64 или URL
        if (!file) {
            return NextResponse.json(
                { error: "Файл не передан" },
                { status: 400 }
            );
        }

        const uploadResponse = await cloudinary.uploader.upload(file, {
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
