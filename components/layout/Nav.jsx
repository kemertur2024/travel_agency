"use client";

import Link from "next/link";
import "./Nav.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    const { t } = useTranslation();
    return (
        <>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link href='/'>{t("nav:main")}</Link>
                    </li>
                    <li>
                        <Link href='/about'>{t("nav:about")}</Link>
                    </li>
                    <li>
                        <Link href='/catalog/category/from_kemer'>
                            {t("nav:from_kemer")}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='icon'
                            />
                        </Link>

                        <ul>
                            <li>
                                <Link href='/catalog/category/from_antalia'>
                                    {t("nav:from_antalia")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/from_alania'>
                                    {t("nav:from_alania")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/from_belek'>
                                    {t("nav:from_belek")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/from_marmaris'>
                                    {t("nav:from_marmaris")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/from_kemer'>
                                    {t("nav:from_kemer")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/from_side'>
                                    {t("nav:from_side")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/catalog/category/rent_yaht'>
                            {t("nav:rent_yaht")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog/category/rent_avto'>
                            {t("nav:rent_avto")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/transfers'>{t("nav:transfers")}</Link>
                    </li>
                    <li>
                        <Link href='/catalog/category/vip'>{t("nav:vip")}</Link>
                    </li>
                    <li>
                        <Link href='/catalog/category/shopping'>
                            {t("nav:shopping")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog/category/rent_villa'>
                            {t("nav:rent_villa")}
                        </Link>
                    </li>

                    <li>
                        <Link href='/'>
                            {t("nav:more")}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='icon'
                            />
                        </Link>
                        <ul>
                            <li>
                                <Link href='/catalog/category/reviews'>
                                    {t("nav:reviews")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/contacts'>
                                    {t("nav:contacts")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/faq'>
                                    {t("nav:faq")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/blog'>
                                    {t("nav:blog")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}
