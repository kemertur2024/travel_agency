"use client";

import cl from "./Footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={cl.footer_wrapper}>
            <div className={cl.footer}>
                <div className={cl.left}>
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
                    <div>
                        <span className={cl.yellow_title}>
                            {t("howtoorder:howtoorder")}
                        </span>
                        <ol className={cl.ol}>
                            <li>{t("howtoorder:paragraf1")}</li>
                            <li>{t("howtoorder:paragraf2")}</li>
                            <li>{t("howtoorder:paragraf3")}</li>
                            <li>{t("howtoorder:paragraf4")}</li>
                        </ol>
                    </div>
                </div>
                <div className={cl.form_wrapper}>
                    <span className={cl.yellow_title}>
                        {t("howtoorder:title_form")}
                    </span>

                    <form className={cl.form}>
                        <div className={cl.input_wrapper}>
                            <input placeholder={t("howtoorder:form_phone")} />
                            <input placeholder={t("howtoorder:form_name")} />
                            <input
                                type='date'
                                placeholder={t("howtoorder:form_date")}
                            />
                            <input placeholder={t("howtoorder:form_mail")} />
                            <input placeholder={t("howtoorder:form_hotel")} />
                            <input
                                placeholder={t("howtoorder:form_excursions")}
                            />
                            <input placeholder={t("howtoorder:form_adult")} />
                            <input
                                placeholder={t("howtoorder:form_kids_0_6")}
                            />
                            <input
                                placeholder={t("howtoorder:form_kids_7_11")}
                            />
                        </div>
                        <div className={cl.textarea_wrapper}>
                            <textarea
                                name=''
                                id=''
                                rows='20'
                                placeholder={t("howtoorder:form_message")}
                            ></textarea>
                            <button>{t("howtoorder:form_button")}</button>
                        </div>
                    </form>

                    <div className={cl.form_bottom}>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_excutsion")}
                            </span>
                            <span> +90541 761 84 40</span>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_partners")}
                            </span>
                            <span> +90541 761 84 40</span>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                UÇAK BİLETİ NO:
                            </span>
                            <span> +90 242 814 22 39</span>
                        </div>
                        <div>
                            <span className={cl.yellow_title}>
                                {t("howtoorder:contact_address")}
                            </span>
                            <span>
                                {" "}
                                BELDİBİ MAH. BAŞKOMUTAN ATATÜRK CAD. NO:184 C/1
                                KEMER / ANTALYA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.socials_wrapper}>Мы в социальных сетях</div>
        </footer>
    );
}
