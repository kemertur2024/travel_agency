"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useEffect } from "react";
import cl from "./LanguageChangerMob.module.css";

export default function LanguageChangerMob() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [selectedLocale, setSelectedLocale] = useState(currentLocale);

    const handleChange = (newLocale) => {
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push("/" + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    const handleToggle = () => {
        const newLocale = selectedLocale === "ru" ? "en" : "ru";
        setSelectedLocale(newLocale);
        handleChange(newLocale);
    };

    useEffect(() => {
        document.getElementById("switch").checked = selectedLocale === "ru";
    }, [selectedLocale]);

    return (
        <>
            <input
                type='checkbox'
                id='switch'
                className={cl.input}
                onChange={handleToggle}
                checked={selectedLocale === "ru"}
            />
            <label htmlFor='switch' className={cl.label}>
                <div className={cl.img_wrapper}>
                    <img src='/images/other/EN.webp' alt='en' />
                    <img src='/images/other/RU.webp' alt='ru' />
                </div>
            </label>
        </>
    );
}
