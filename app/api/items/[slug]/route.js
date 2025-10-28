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

    const updated = await Item.findOneAndUpdate(
        { slug: params.slug },
        { ...data, updatedAt: Date.now() },
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
