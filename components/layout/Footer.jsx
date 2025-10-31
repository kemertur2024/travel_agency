"use client";

import cl from "./Footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Form from "../UI/Form";
import { useState } from "react";
import MyModal from "@/components/UI/MyCustomModal";
import MyButton from "@/components/UI/MyCustomButton";
import Copyright from "../UI/Copyright";
import Social from "../UI/Soсial";

export default function Footer({ locale }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => setIsOpen(false);

    return (
        <footer className={cl.footer_wrapper}>
            <div className={cl.footer}>
                <div className={cl.footer_info}>
                    <div className={cl.howtoorder}>
                        <span className={cl.yellow_title}>
                            {t("howtoorder:howtoorder")}
                        </span>
                        <ol className={cl.ol}>
                            <li>{t("howtoorder:paragraf1")}</li>
                            <li>{t("howtoorder:paragraf2")}</li>
                            <li>{t("howtoorder:paragraf3")}</li>
                            <li>{t("howtoorder:paragraf4")}</li>
                        </ol>
                        <MyButton onClick={toggleOpen}>
                            {t("howtoorder:howtoorder_btn")}
                        </MyButton>
                    </div>

                    <div className={cl.form_bottom}>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_excutsion")}
                            </span>
                            <a href='tel:+905350449927'>+90 535 044 99 27</a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_partners")}
                            </span>
                            <a href='tel:+905350449927'>+90 535 044 99 27</a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                UÇAK BİLETİ NO:
                            </span>
                            <a href='tel:+905350449927'>+90 535 044 99 27</a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_address")}
                            </span>
                            <span>
                                Antalia Kemer Kiris Sahil Caddesi Viking Park
                                Otel 40/G
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cl.navigation}>
                    <nav className={cl.nav}>
                        {/* --- Регионы --- */}
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_region")}
                            </span>
                            <li>
                                <Link href={`/${locale}/catalog/from_kemer`}>
                                    {t("nav:from_kemer")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/from_antalia`}>
                                    {t("nav:from_antalia")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/from_alania`}>
                                    {t("nav:from_alania")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/from_belek`}>
                                    {t("nav:from_belek")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/from_marmaris`}>
                                    {t("nav:from_marmaris")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/from_side`}>
                                    {t("nav:from_side")}
                                </Link>
                            </li>
                        </ul>

                        {/* --- Услуги --- */}
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_services")}
                            </span>
                            <li>
                                <Link href={`/${locale}/catalog/rent_yacht`}>
                                    {t("nav:rent_yacht")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/rent_auto`}>
                                    {t("nav:rent_auto")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/transfers`}>
                                    {t("nav:transfers")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/vip`}>
                                    {t("nav:vip")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/shopping`}>
                                    {t("nav:shopping")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/catalog/rent_villa`}>
                                    {t("nav:rent_villa")}
                                </Link>
                            </li>
                        </ul>

                        {/* --- Поддержка --- */}
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_support")}
                            </span>
                            <li>
                                <Link href={`/${locale}/reviews`}>
                                    {t("nav:reviews")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/contacts`}>
                                    {t("nav:contacts")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/faq`}>
                                    {t("nav:faq")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/blog`}>
                                    {t("nav:blog")}
                                </Link>
                            </li>
                        </ul>

                        {/* --- Партнёры --- */}
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_partners")}
                            </span>
                            <li>
                                <Link href='https://marketingstark.app/'>
                                    {t("nav:marketing")}
                                </Link>
                            </li>
                            <li>
                                <Link href='https://kemer.app/'>
                                    {t("nav:kemerapp")}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={cl.socials_wrapper}>
                <Social />
                <Copyright />
            </div>

            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form onSuccess={handleSuccess} />
            </MyModal>
        </footer>
    );
}
