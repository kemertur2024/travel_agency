"use client";
import { useTranslation } from "react-i18next";
import "./Advantages_item.css";

export default function Advantages_item({ item }) {
    const { t } = useTranslation("advantages");

    return (
        <figure className='advantages_figure'>
            <img src={item.img} alt={item.name} className='advantages_img' />
            <figcaption className='advantages_figcaption'>
                <div className='advantages_title'>{t(item.nameKey)}</div>
                <div className='advantages_desc'>{t(item.descriptionKey)}</div>
            </figcaption>
        </figure>
    );
}
