import cl from "./Carousel.module.css";

import ProductItem from "../ProductItem";

export default function Carousel({ data }) {
    return (
        <div className={cl.main_container}>
            <div className={cl.window}>
                <div className={cl.all_pages_container}>
                    {data.map((child) => (
                        <div className={cl.item_wrapper} key={child.id}>
                            <ProductItem child={child} className={cl.item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
