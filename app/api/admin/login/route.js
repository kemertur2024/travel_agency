import { NextResponse } from "next/server";

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const TOKEN_VALUE = process.env.ADMIN_TOKEN || "admintoken";

export async function POST(req) {
    const { username, password } = await req.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        const res = NextResponse.json({ ok: true });

        res.cookies.set({
            name: "admintoken",
            value: TOKEN_VALUE,
            httpOnly: true,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 7 дней
        });

        return res;
    }

    return NextResponse.json({ ok: false }, { status: 401 });
}
