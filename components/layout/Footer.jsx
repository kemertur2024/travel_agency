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
                            <span className={cl.yellow_title}>ВАШ РЕГИОН</span>
                            <li>
                                <Link href='/'>{t("kemer")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("antalia")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("alania")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("belek")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("marmaris")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("side")}</Link>
                            </li>
                        </ul>
                        <ul>
                            <span className={cl.yellow_title}>
                                {" "}
                                НАШИ УСЛУГИ
                            </span>
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
                        </ul>
                        <ul>
                            <span className={cl.yellow_title}> ПОДДЕРЖКА</span>

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
                    </nav>
                    <div>
                        <span className={cl.yellow_title}>
                            {" "}
                            КАК ЗАКАЗАТЬ ЭКСКУРСИЮ?
                        </span>
                        ​​ 1. Заполните форму заявки. (бронь без ПРЕДОПЛАТЫ!) В
                        течение часа с вами свяжется наш оператор. 2.
                        Внимание!!! В указанную дату и время, ожидайте трансфер
                        возле входа в отель, а не на ресепшене отеля. 3. Оплата
                        производится в день экскурсии исполнителю. 4. Оплатить
                        можно на Сбербанк на Каспи в USDT.
                    </div>
                </div>
                <div className={cl.form_wrapper}>
                    <span className={cl.yellow_title}>ФОРМА ЗАЯВКИ</span>

                    <form className={cl.form}>
                        <div className={cl.input_wrapper}>
                            <input placeholder='телефон с кодом страны' />
                            <input placeholder='имя' />
                            <input type='date' placeholder='дата тура' />
                            <input placeholder='Эл.почта' />
                            <input placeholder='Название отеля/номер комнаты' />
                            <input placeholder='Экскурсия' />
                            <input placeholder='Кол-во взрослых' />
                            <input placeholder='Дети 0-6 лет' />
                            <input placeholder='Дети 7-11 лет' />
                        </div>
                        <div className={cl.textarea_wrapper}>
                            <textarea name='' id='' rows='20'></textarea>
                            <button>заказать</button>
                        </div>
                    </form>

                    <div className={cl.form_bottom}>
                        ЭКСКУРСИИ: +90541 761 84 40 Сотрудничество с нами:
                        +90541 761 84 40 UÇAK BİLETİ NO: +90 242 814 22 39 НАШ
                        АДРЕС: BELDİBİ MAH. BAŞKOMUTAN ATATÜRK CAD. NO:184 C/1
                        KEMER / ANTALYA
                    </div>
                </div>
            </div>
            <div className={cl.socials_wrapper}>Мы в социальных сетях</div>
        </footer>
    );
}
