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

    const handleRadioChange = (event) => {
        const newLocale = event.target.value;
        setSelectedLocale(newLocale);
        handleChange(newLocale);
    };

    return (
        <div className={cl.radio_group}>
            <label className={cl.radio_label}>
                <input
                    type='radio'
                    name='language'
                    value='en'
                    checked={selectedLocale === "en"}
                    onChange={handleRadioChange}
                    className={cl.radio_input}
                />
                <img src='/images/other/EN.webp' alt='English' />
            </label>

            <label className={cl.radio_label}>
                <input
                    type='radio'
                    name='language'
                    value='ru'
                    checked={selectedLocale === "ru"}
                    onChange={handleRadioChange}
                    className={cl.radio_input}
                />
                <img src='/images/other/RU.webp' alt='Russian' />
            </label>

            <label className={`${cl.radio_label} ${cl.disabled}`}>
                <input
                    type='radio'
                    name='language'
                    value='pl'
                    disabled
                    className={cl.radio_input}
                />
                <img src='/images/other/PL.webp' alt='Polish' />
            </label>

            <label className={`${cl.radio_label} ${cl.disabled}`}>
                <input
                    type='radio'
                    name='language'
                    value='de'
                    disabled
                    className={cl.radio_input}
                />
                <img src='/images/other/DE.webp' alt='German' />
            </label>
        </div>
    );
}
