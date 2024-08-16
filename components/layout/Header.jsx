"use client";

import LanguageChanger from "../UI/LanguageChanger";
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className='header'>
            <div className='main_row'>
                <div className='main_top_row'>
                    <div className='img_wrap'>
                        <img src='images/logo/Logo.webp' alt='Rom travel' />
                    </div>
                    <div className='label_1'>
                        <div>{t("header:excursions")}</div>
                        <div>
                            <span className='yellow_span'>
                                {t("header:subtitle")}
                            </span>{" "}
                            <span className='name_span'>Rom Travel</span>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='label_2'>
                            <div className='green_span'>
                                {t("header:order")}
                            </div>
                            <div className='underline_span'>
                                +90 000-000-00-00
                            </div>
                            <div className='underline_span'>
                                {t("header:excursionsKemer")}
                            </div>
                        </div>
                        <LanguageChanger />
                    </div>
                </div>

                <img
                    src='images/other/toun.webp'
                    alt='Rom travel'
                    className='toun_img'
                />
            </div>
            <nav className='nav'>навигация</nav>
        </header>
    );
}
