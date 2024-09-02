"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import "./LanguageChanger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [selectedLocale, setSelectedLocale] = useState(currentLocale);
    const [open, setOpen] = useState(false);

    const handleChange = (newLocale) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
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

    const handleClick = (newLocale) => {
        setSelectedLocale(newLocale);
        handleChange(newLocale);
        setOpen(false);
    };

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <div className='select_wrapper'>
            <div className='change_button' onClick={toggleDropdown}>
                <img
                    src={`/images/other/${selectedLocale.toUpperCase()}.webp`}
                    alt={selectedLocale}
                />
                {selectedLocale.toUpperCase()}
                {open ? (
                    <div className='icon'>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                ) : (
                    <div className='icon'>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                )}
            </div>

            <ul className={`dropdown_ul ${open ? "open" : ""}`}>
                <li className='dropdown_li' onClick={() => handleClick("ru")}>
                    <img src='/images/other/RU.webp' alt='rus' />
                    RU
                </li>
                <li className='dropdown_li' onClick={() => handleClick("en")}>
                    <img src='/images/other/EN.webp' alt='eng' />
                    EN
                </li>
                <li className='dropdown_li'>
                    <img src='/images/other/DE.webp' alt='de' />
                    DE
                </li>
                <li className='dropdown_li'>
                    <img src='/images/other/PL.webp' alt='pl' />
                    PL
                </li>
            </ul>
            <input type='text' hidden readOnly value={currentLocale} />
        </div>
    );
}
