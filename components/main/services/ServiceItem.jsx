"use client";

import { useTranslation } from "react-i18next";
import "./ServiceItem.css";
import Image from "next/image";

export default function ServiceItem({ item }) {
    const { t } = useTranslation();

    return (
        <>
            <figure className='item_wrapper'>
                <div className='item_imgWrapper'>
                    <Image
                        className='item_img'
                        src={item.img}
                        alt={item.name}
                        // width={288}
                        // height={192}
                        fill
                        sizes='(max-width: 768px) 100%, 33%'
                    />
                </div>
                <figcaption className='item_title'>
                    {t(`Services:${item.nameKey}`)}
                </figcaption>
            </figure>
        </>
    );
}
