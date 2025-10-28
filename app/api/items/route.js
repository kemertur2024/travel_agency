import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Item from "@/lib/schemas/item";

export async function GET(request) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");

        let query = {};
        if (type) query.type = type;

        const items = await Item.find(query).lean();
        return new Response(JSON.stringify(items), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(req) {
    await connectToDatabase();
    const data = await req.json();

    try {
        const newItem = new Item(data);
        await newItem.save();
        return NextResponse.json(newItem, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
