"use client";

import LanguageChanger from "../UI/LanguageChanger";
import cl from "./Header.module.css";
import { useTranslation } from "react-i18next";
import Nav from "@/components/layout/Nav";
import MobNav from "@/components/layout/MobNav";
import Burger from "../UI/Burger";
import { useState } from "react";
import Link from "next/link";
import MyButton from "../UI/MyCustomButton";
import { useRouter } from "next/navigation";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);
    const router = useRouter();

    const { t } = useTranslation();
    return (
        <header className={cl.header}>
            <div className={cl.main_row}>
                <div className={cl.main_top_row}>
                    <Link href='/' className={cl.img_wrap}>
                        <img src='/images/logo/Logo.webp' alt='logo' />
                    </Link>
                    <div className={cl.label_1}>
                        <div>{t("header:excursions")}</div>
                        <div className={cl.label_1_bottom}>
                            <span className={cl.yellow_span}>
                                {t("header:subtitle")}
                            </span>{" "}
                        </div>
                    </div>
                    <div className={cl.right}>
                        <LanguageChanger />
                        <div className={cl.label_2}>
                            <MyButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push(`${process.env.WHATSAPP_LINK}`);
                                }}
                            >
                                {t("header:btn")}
                            </MyButton>{" "}
                        </div>
                        <div className={cl.btn_wrapper}>
                            {/* <LanguageChangerMob /> */}
                            <Burger
                                toggleNav={toggleNav}
                                isNavOpen={isNavOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Nav />
            <MobNav isOpen={isNavOpen} closeMenu={closeNav} />
        </header>
    );
}
