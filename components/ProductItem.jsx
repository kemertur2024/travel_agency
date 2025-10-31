"use client";

import cl from "./ProductItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { dollar } from "@/lib/constants/constants";

export default function ProductItem({ child, category, locale }) {
    return (
        <>
            <Link
                key={child.id}
                href={`/${locale}/catalog/${category}/${child.slug}`}
                className={cl.item}
                rel='noopener noreferrer'
                // target='_blank'
            >
                <div className={cl.img_wrapper}>
                    <Image
                        src={
                            Array.isArray(child.images) &&
                            child.images.length > 0
                                ? child.images[0].url // или child.images[0] если у тебя просто строка
                                : "/images/default_product.png"
                        }
                        alt={child.name || "Product Image"}
                        width={854}
                        height={480}
                        priority
                    />
                </div>
                <div className={cl.bottom}>
                    <h3 className={cl.bottom_title}>{child.title[locale]}</h3>
                    <div className={cl.bottom_price}>
                        <span className={cl.price}>
                            {child.price}
                            {dollar}
                        </span>
                        {child.oldprice ? (
                            <span className={cl.oldprice}>
                                {child.oldprice}
                                {dollar}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                {child.label?.[locale] ? (
                    <div className={cl.label}>{child.label[locale]}</div>
                ) : null}
            </Link>
        </>
    );
}
