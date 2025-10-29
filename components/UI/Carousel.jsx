import cl from "./Carousel.module.css";
import { getItemByCategory } from "@/lib/api/items";

import ProductItem from "../ProductItem";

export default async function Carousel({ category, locale }) {
    const data = await getItemByCategory(category);

    return (
        <div className={cl.main_container}>
            <div className={cl.window}>
                <div className={cl.all_pages_container}>
                    {data.map((child) => (
                        <div className={cl.item_wrapper} key={child.id}>
                            <ProductItem
                                child={child}
                                className={cl.item}
                                category={category}
                                locale={locale}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
