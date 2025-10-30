import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("admintoken")?.value;

    // --- 1. Защита админки ---
    const loginUrl = new URL("/admin/login", req.url);

    if (pathname.startsWith("/admin/login")) {
        return NextResponse.next(); // логин всегда доступен
    }

    if (pathname.startsWith("/admin") && !token) {
        return NextResponse.redirect(loginUrl); // если нет токена
    }

    // --- 2. Редирект корня на локаль браузера ---
    if (pathname === "/") {
        const acceptLang = req.headers.get("accept-language") || "";
        const supported = ["ru", "en"];
        const match = supported.find((l) => acceptLang.startsWith(l)) || "ru";
        const url = req.nextUrl.clone();
        url.pathname = `/${match}`;
        return NextResponse.redirect(url, 301);
    }

    // --- 3. Всё остальное пропускаем ---
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/"], // админка и корень
};
