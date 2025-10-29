import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Item from "@/lib/schemas/item";

export async function GET(request) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");
        const id = searchParams.get("id");
        const category = searchParams.get("category");

        // === Поиск по ID ===
        if (id) {
            const item = await Item.findById(id).lean();
            if (!item) {
                return NextResponse.json(
                    { error: "Item not found" },
                    { status: 404 }
                );
            }
            return NextResponse.json(item, { status: 200 });
        }

        // === Общий запрос ===
        const query = {};
        if (type) query.type = type;

        if (category) {
            // $in работает для строк и массивов
            query.category = { $in: [category] };
        }

        const items = await Item.find(query).lean();

        return NextResponse.json(items, { status: 200 });
    } catch (err) {
        console.error("GET /api/items error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();

        const newItem = new Item(data);
        await newItem.save();

        return NextResponse.json(newItem, { status: 201 });
    } catch (err) {
        console.error("POST /api/items error:", err);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
