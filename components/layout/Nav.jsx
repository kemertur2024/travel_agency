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
                        <Link href='/catalog/from_kemer'>
                            {t("nav:from_kemer")}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='icon'
                            />
                        </Link>

                        <ul>
                            <li>
                                <Link href='/catalog/from_antalia'>
                                    {t("nav:from_antalia")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/from_alania'>
                                    {t("nav:from_alania")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/from_belek'>
                                    {t("nav:from_belek")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/from_marmaris'>
                                    {t("nav:from_marmaris")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/from_kemer'>
                                    {t("nav:from_kemer")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/from_side'>
                                    {t("nav:from_side")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/catalog/rent_yacht'>
                            {t("nav:rent_yacht")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog/rent_auto'>
                            {t("nav:rent_auto")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/transfers'>{t("nav:transfers")}</Link>
                    </li>
                    <li>
                        <Link href='/catalog/vip'>{t("nav:vip")}</Link>
                    </li>
                    <li>
                        <Link href='/catalog/shopping'>
                            {t("nav:shopping")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog/rent_villa'>
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
                                <Link href='/reviews'>{t("nav:reviews")}</Link>
                            </li>
                            <li>
                                <Link href='/contacts'>
                                    {t("nav:contacts")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/faq'>{t("nav:faq")}</Link>
                            </li>
                            <li>
                                <Link href='/blog'>{t("nav:blog")}</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}
