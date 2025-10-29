const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://kemer-tur.net"
        : "http://localhost:3000";

export async function getAllItems() {
    const res = await fetch(`${BASE_URL}/api/items`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
}

export async function getItemsByType(type) {
    const res = await fetch(`${BASE_URL}/api/items?type=${type}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
}

export async function getItemBySlug(slug) {
    const res = await fetch(`${BASE_URL}/api/items/${slug}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch item");
    return res.json();
}

export async function getItemById(id) {
    const res = await fetch(`${BASE_URL}/api/items?id=${id}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch item by id");
    return res.json();
}
export async function getItemByCategory(category) {
    const res = await fetch(`${BASE_URL}/api/items?category=${category}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch item by category");
    return res.json();
}
