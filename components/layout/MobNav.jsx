"use client";

import Link from "next/link";
import cl from "./MobNav.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Social from "../UI/Soсial";
import LanguageChanger from "../UI/LanguageChanger";
import { useState } from "react";
import MyButton from "../UI/MyCustomButton";
import { useRouter } from "next/navigation";

export default function Nav({ isOpen, closeMenu }) {
    const router = useRouter();
    const { t } = useTranslation();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <>
            <div
                className={` ${cl.nav_overlay} ${isOpen ? cl.open : ""}`}
            ></div>
            <nav className={` ${cl.mnavigation} ${isOpen ? cl.open : ""}`}>
                <div className={cl.mobnav_toprow}>
                    <MyButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(`${process.env.WHATSAPP_LINK}`);
                        }}
                    >
                        Заказать
                    </MyButton>
                    <LanguageChanger />
                </div>
                <ul>
                    <li>
                        <Link onClick={closeMenu} href='/'>
                            {t("nav:main")}{" "}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/about'>
                            {t("nav:about")}
                        </Link>
                    </li>
                    <li>
                        <div
                            onClick={() => toggleSubmenu(1)}
                            className={cl.micon}
                        >
                            {t("nav:from_kemer")}
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <ul
                            style={{
                                display: openSubmenu === 1 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_antalia'
                                >
                                    {t("nav:from_antalia")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_alania'
                                >
                                    {t("nav:from_alania")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_belek'
                                >
                                    {t("nav:from_belek")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_kemer'
                                >
                                    {t("nav:from_kemer")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_marmaris'
                                >
                                    {t("nav:from_marmaris")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    href='/catalog/category/from_side'
                                >
                                    {t("nav:from_side")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/rent_yaht'
                        >
                            {t("nav:rent_yaht")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/rent_avto'
                        >
                            {t("nav:rent_avto")}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/transfers'>
                            {t("nav:transfers")}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/catalog/category/vip'>
                            {t("nav:vip")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/shopping'
                        >
                            {t("nav:shopping")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/rent_villa'
                        >
                            {t("nav:rent_villa")}
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/reviews'
                        >
                            {t("nav:reviews")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/contacts'
                        >
                            {t("nav:contacts")}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/catalog/category/faq'>
                            {t("nav:faq")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            href='/catalog/category/politic'
                        >
                            {t("nav:politic")}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href='/catalog/category/blog'>
                            {t("nav:blog")}
                        </Link>
                    </li>
                </ul>
                <div className={cl.socials_wrapper}>
                    <Social />
                </div>{" "}
            </nav>
        </>
    );
}
