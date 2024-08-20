// lib/filterByTags.js

import { excursions } from "@/lib/Excursions";

export function filterByTags(tags) {
    return excursions.filter((item) =>
        item.category.some((category) => tags.includes(category))
    );
}
