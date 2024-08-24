"use client";

import cl from "./Footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Form from "../UI/Form";
import { useState } from "react";
import MyModal from "@/components/UI/MyCustomModal";
import MyButton from "@/components/UI/MyCustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faTelegram,
    faWhatsapp,
    faInstagram,
    faTwitter,
    faViber,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
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
                        </ol>{" "}
                        <MyButton onClick={toggleOpen}>
                            {t("howtoorder:howtoorder_btn")}
                        </MyButton>
                    </div>
                    <div className={cl.form_bottom}>
                        <div>
                            {" "}
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_excutsion")}{" "}
                            </span>
                            <a href='tel:+905350449927' target='_blank'>
                                +90 535 044 99 27
                            </a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_partners")}
                            </span>
                            <a href='tel:+905350449927' target='_blank'>
                                {" "}
                                +90 535 044 99 27
                            </a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {" "}
                                UÇAK BİLETİ NO:
                            </span>
                            <a href='tel:+905350449927' target='_blank'>
                                {" "}
                                +90 535 044 99 27
                            </a>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_address")}
                            </span>
                            <span>
                                {" "}
                                Antalia Kemer Kiris Sahil Caddesi Viking Park
                                Otel 40/G
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className={cl.navigation}>
                    <nav className={cl.nav}>
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_region")}
                            </span>
                            <li>
                                <Link href='/catalog/category/from_kemer'>
                                    {t("nav:from_kemer")}
                                </Link>
                            </li>
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
                                <Link href='/catalog/category/from_side'>
                                    {t("nav:from_side")}
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_services")}
                            </span>
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
                                <Link href='/catalog/category/transfers'>
                                    {t("nav:transfers")}
                                </Link>
                            </li>
                            <li>
                                <Link href='/catalog/category/vip'>
                                    {t("nav:vip")}
                                </Link>
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
                                <Link href='/catalog/category/medicine'>
                                    {t("nav:medicine")}
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:title_support")}
                            </span>

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
                    </nav>
                </div>
            </div>
            <div className={cl.socials_wrapper}>
                {" "}
                <div className={cl.footer__content}>
                    <div className={cl.footer__icons}>
                        <a
                            href='https://wa.me/905350449927'
                            target='_blank'
                            className={cl.footer__link}
                        >
                            <FontAwesomeIcon
                                className={cl.icons}
                                icon={faWhatsapp}
                            />
                        </a>
                        <a
                            href='viber://add?number=905350449927'
                            target='_blank'
                            className={cl.footer__link}
                        >
                            <FontAwesomeIcon
                                className={cl.icons}
                                icon={faViber}
                            />
                        </a>
                        <a
                            href='mailto:kemertur2024@gmail.com?subject=Important-mail:&body=Hello.'
                            type='email'
                            className={cl.footer__link}
                            target='_blank'
                        >
                            <FontAwesomeIcon
                                className={cl.icons}
                                icon={faEnvelope}
                            />
                        </a>
                        <a
                            href='https://t.me/+905350449927'
                            target='_blank'
                            className={cl.footer__link}
                        >
                            <FontAwesomeIcon
                                className={cl.icons}
                                icon={faTelegram}
                            />
                        </a>

                        <a
                            href='https://www.instagram.com/sultan_kemer_kiris?igsh=M2UydWt4bnU2cmVk'
                            target='_blank'
                            className={cl.footer__link}
                        >
                            <FontAwesomeIcon
                                className={cl.icons}
                                icon={faInstagram}
                            />
                        </a>
                    </div>
                </div>
                <footer className={cl.copyright}>
                    Copyright © 2023-2024 Kemer.app
                </footer>
            </div>{" "}
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form />
            </MyModal>
        </footer>
    );
}
