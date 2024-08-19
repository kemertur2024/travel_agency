"use client";

import Link from "next/link";
import "./MobNav.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LanguageChanger from "../UI/LanguageChanger";
import { useState } from "react";

export default function Nav({ isOpen }) {
    const { t } = useTranslation();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <>
            <div className={`nav-overlay ${isOpen ? "open" : ""}`}></div>
            <nav className={`mnavigation ${isOpen ? "open" : ""}`}>
                <LanguageChanger />
                <ul>
                    <li>
                        <Link href='/'>{t("nav:main")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:about")}</Link>
                    </li>
                    <li>
                        <div onClick={() => toggleSubmenu(1)} className='micon'>
                            {t("nav:from_kemer")}
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <ul
                            style={{
                                display: openSubmenu === 1 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href='/'>{t("nav:from_antalia")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("nav:from_alania")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("nav:from_belek")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("nav:from_kemer")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("nav:from_marmaris")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("nav:from_side")}</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:rent_yaht")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:rent_avto")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:transfers")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:vip")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:shopping")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:rent_valla")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:medicine")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:rewiews")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:contacts")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:faq")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:politic")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("nav:blog")}</Link>
                    </li>
                </ul>
                <div className='mlabel_2'>
                    <div className='green_span'>{t("header:order")}</div>
                    <div className='underline_span'>+90 000-000-00-00</div>
                    <div className='underline_span'>
                        {t("header:excursionsKemer")}
                    </div>
                </div>
            </nav>
        </>
    );
}
