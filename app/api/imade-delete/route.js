import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const { public_id } = await request.json();
        if (!public_id) {
            return NextResponse.json(
                { error: "public_id не передан" },
                { status: 400 }
            );
        }

        const result = await cloudinary.uploader.destroy(public_id);
        return NextResponse.json(result);
    } catch (err) {
        console.error("❌ Ошибка Cloudinary delete:", err);
        return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
    }
}
