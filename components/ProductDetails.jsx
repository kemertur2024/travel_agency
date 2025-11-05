import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import cl from "./ProductDetails.module.css";
import CarouselImg from "./UI/CarouselImg";
import TitleExcursion from "./layout/TitleExscursion";
import { dollar } from "@/lib/constants/constants";
import Carousel from "./UI/Carousel";
import OrderButton from "./UI/OrderButton";

export default function ProductDetails({ item, category, locale }) {
    return (
        <>
            <div className={cl.grid}>
                <main className={cl.container}>
                    <CarouselImg images={item.images} />
                    <TitleExcursion text={item.title[locale]} />
                    <div className={cl.price_wrapper}>
                        <span className={cl.price}>
                            {item.price}
                            {dollar}
                        </span>
                        {item.oldprice ? (
                            <span className={cl.oldprice}>
                                {item.oldprice}
                                {dollar}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>{" "}
                    <div className={cl.order_button}>
                        <OrderButton locale={locale} />
                    </div>
                    <div className={cl.description}>
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {item.description[locale]}
                        </Markdown>
                    </div>
                    <div className={cl.tooLike}>
                        Вам также может понравиться
                    </div>
                    <div>
                        <Carousel category={category} locale={locale} />
                    </div>
                </main>
            </div>
        </>
    );
}
