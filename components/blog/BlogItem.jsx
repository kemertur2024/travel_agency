"use client";

import cl from "./BlogItem.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function BlogItem({ item }) {
    const { t } = useTranslation("blog");
    return (
        <>
            <Link href={`/blog/${item.id}`} className={cl.blogitem_wrapper}>
                <div className={cl.blogitem}>
                    <div className={cl.first}>
                        <div className={cl.date}>{item.postDate}</div>
                        <div className={cl.img_wrapper}>
                            <img src={item.image} alt={item.name} />
                        </div>
                    </div>
                    <h2 className={cl.second}>{t(item.titleKey)}</h2>
                </div>
            </Link>
        </>
    );
}
