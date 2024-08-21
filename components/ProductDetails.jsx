"use client";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useTranslation } from "react-i18next";
import cl from "./ProductDetails.module.css";
import CarouselImg from "./UI/CarouselImg";
import TitleExcursion from "./layout/TitleExscursion";
import { dollar } from "@/lib/constants/constants";
import Carousel from "./UI/Carousel";
import { filterByTags } from "@/helpers/helpers";

export default function ProductDetails({ item }) {
    const { t } = useTranslation();
    const tags = [...item.category];
    const data = filterByTags(tags);

    return (
        <>
            <div className={cl.grid}>
                <main className={cl.container}>
                    <CarouselImg images={item.images} />
                    <TitleExcursion text={item.nameKey} />
                    <div className={cl.price_wrapper}>
                        <span className={cl.price}>
                            {item.price}
                            {dollar}
                        </span>
                        <span className={cl.oldprice}>
                            {item.oldprice}
                            {dollar}
                        </span>
                    </div>
                    <div className={cl.description}>
                        <Markdown
                            children={t(`excursions:${item.descriptionKey}`)}
                            remarkPlugins={[remarkGfm]} // Enables GitHub Flavored Markdown
                            rehypePlugins={[rehypeRaw]} // Allows rendering raw HTML in Markdown
                        />
                    </div>
                    <div className={cl.tooLike}>
                        Вам также может понравиться
                    </div>
                    <div>
                        <Carousel data={data} />
                    </div>
                </main>
            </div>
        </>
    );
}
