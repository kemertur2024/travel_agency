import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Item from "@/lib/schemas/item";

export async function GET(req, { params }) {
    await connectToDatabase();
    const item = await Item.findOne({ slug: params.slug });
    if (!item)
        return NextResponse.json({ error: "Item не найден" }, { status: 404 });
    return NextResponse.json(item);
}

export async function PUT(req, { params }) {
    await connectToDatabase();

    const data = await req.json();

    // Если images — строка, пытаемся распарсить
    if (typeof data.images === "string") {
        try {
            data.images = JSON.parse(data.images);
        } catch (e) {
            console.error("Не удалось распарсить images:", e);
            data.images = [];
        }
    }

    // Если массив, приводим строки к объектам
    if (Array.isArray(data.images)) {
        data.images = data.images.map((img) =>
            typeof img === "string"
                ? { url: img, public_id: null, alt: "" }
                : img
        );
    }

    const preparedData = {
        ...data,
        images: Array.isArray(data.images)
            ? data.images.map((img) => {
                  if (typeof img === "string")
                      return { url: img, public_id: null, alt: "" };
                  if (img.id && !img.public_id) {
                      img.public_id = img.id;
                      delete img.id;
                  }
                  return img;
              })
            : [],
        updatedAt: Date.now(),
    };

    const updated = await Item.findOneAndUpdate(
        { slug: params.slug },
        { $set: preparedData },
        { new: true }
    );

    if (!updated)
        return NextResponse.json({ error: "Item не найден" }, { status: 404 });

    return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
    await connectToDatabase();

    const deleted = await Item.findOneAndDelete({ slug: params.slug });
    if (!deleted)
        return NextResponse.json({ error: "Item не найден" }, { status: 404 });
    return NextResponse.json({ message: "Item удален" });
}
