import ProductItem from "@/components/ProductItem";
import cl from "./page.module.css";
import TranslationsProvider from "@/components/TranslationsProvider";
import Title from "@/components/layout/Title";
import { shuffleArray } from "@/helpers/helpers";

import { getAllItems } from "@/lib/api/items";

const i18nNameSpaces = [
    "HomePage",
    "Services",
    "nav",
    "header",
    "advantages",
    "excursions",
    "excursionName",
    "label",
];

export default async function ExcursionPage({ params }) {
    const { locale, category } = params;
    const allItems = await getAllItems();
    const items = allItems.filter(
        (i) => Array.isArray(i.category) && i.category.includes(category)
    );
    const data = shuffleArray(items);
    return (
        <>
            <Title text={category} />
            <div className={cl.wrapper}>
                {data.map((child) => (
                    <ProductItem
                        child={child}
                        key={child.id}
                        category={category}
                        locale={locale}
                    />
                ))}
            </div>
        </>
    );
}
