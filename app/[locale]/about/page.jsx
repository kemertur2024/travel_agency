import Advantages from "@/components/main/advantages/Advantages";
import cl from "./about.module.css";
import Title from "@/components/layout/Title";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNameSpaces = [
    "HomePage",
    "Services",
    "nav",
    "header",
    "advantages",
    "excursions",
    "excursionName",
    "about",
];

export default async function AboutPage({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.about_wrapper}>
                    <Title text={t("about")} />
                    <img
                        src='/images/other/about.webp'
                        alt='about'
                        className={cl.about_img}
                    />
                    <div className={cl.about_text}>
                        <p>{t("about:paragraf1")}</p>
                        <p>{t("about:paragraf2")}</p>
                        <p>{t("about:paragraf3")}</p>
                        <p>{t("about:paragraf4")}</p>
                        <p>{t("about:paragraf5")}</p>
                    </div>
                    <Advantages />
                </div>
            </TranslationsProvider>
        </>
    );
}
