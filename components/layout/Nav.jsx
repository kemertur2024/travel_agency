"use client";

import Link from "next/link";
import "./Nav.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";

export default function Nav() {
    const params = useParams();

    const lang = params?.lang || params?.locale || "ru";
    const { t } = useTranslation();

    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link href={`/${lang}`}>{t("nav:main")}</Link>
                </li>
                <li>
                    <Link href={`/${lang}/about`}>{t("nav:about")}</Link>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/from_kemer`}>
                        {t("nav:from_kemer")}
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className='icon'
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link href={`/${lang}/catalog/from_antalia`}>
                                {t("nav:from_antalia")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/catalog/from_alania`}>
                                {t("nav:from_alania")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/catalog/from_belek`}>
                                {t("nav:from_belek")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/catalog/from_marmaris`}>
                                {t("nav:from_marmaris")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/catalog/from_kemer`}>
                                {t("nav:from_kemer")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/catalog/from_side`}>
                                {t("nav:from_side")}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/rent_yacht`}>
                        {t("nav:rent_yacht")}
                    </Link>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/rent_auto`}>
                        {t("nav:rent_auto")}
                    </Link>
                </li>
                <li>
                    <Link href={`/${lang}/transfers`}>
                        {t("nav:transfers")}
                    </Link>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/vip`}>{t("nav:vip")}</Link>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/shopping`}>
                        {t("nav:shopping")}
                    </Link>
                </li>
                <li>
                    <Link href={`/${lang}/catalog/rent_villa`}>
                        {t("nav:rent_villa")}
                    </Link>
                </li>
                <li>
                    <Link href={`/${lang}`}>
                        {t("nav:more")}
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className='icon'
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link href={`/${lang}/reviews`}>
                                {t("nav:reviews")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/contacts`}>
                                {t("nav:contacts")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/faq`}>{t("nav:faq")}</Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/blog`}>{t("nav:blog")}</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
