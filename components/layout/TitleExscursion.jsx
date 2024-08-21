"use client";

import { useTranslation } from "react-i18next";
import "./Title.css";

export default function TitleExcursion({ text }) {
    const { t, i18n } = useTranslation("excursionName");

    return (
        <div className='title_wrap'>
            <h1 className='title_h1'>{t(text)}</h1>
        </div>
    );
}
