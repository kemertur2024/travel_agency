// app/api/test-db/route.js
import connectToDatabase from "@/lib/mongoose";

export async function GET(req) {
    try {
        await connectToDatabase();
        return new Response(JSON.stringify({ message: "MongoDB connected!" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ error: "Database connection failed" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
