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
                        <Link href='/'>{t("nav:about")}</Link>
                    </li>
                    <li>
                        <Link href='/'>
                            {t("nav:from_kemer")}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='icon'
                            />
                        </Link>

                        <ul>
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
                        <Link href='/'>
                            {t("nav:more")}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className='icon'
                            />
                        </Link>
                        <ul>
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
                                <Link href='/'>{t("nav:blog")}</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}
