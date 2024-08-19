"use client";

import { useTranslation } from "react-i18next";
import "./Title.css";

export default function Title({ text }) {
    const { t } = useTranslation("nav");

    return (
        <>
            <div className='title_wrap'>
                <h1 className='title_h1'>{t(text)}</h1>
            </div>
        </>
    );
}
