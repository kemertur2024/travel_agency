import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({ ok: true });

    // Удаляем токен
    res.cookies.set({
        name: "admintoken",
        value: "",
        path: "/",
        maxAge: 0,
        sameSite: "lax",
    });

    return res;
}
