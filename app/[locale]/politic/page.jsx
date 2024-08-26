import cl from "./Politic.module.css";
import Social from "@/components/UI/Soсial";
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
    "howtoorder",
    "faq",
    "politic",
];

export default async function PoliticPage({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.politic_wrapper}>
                    <Title text={t("politic")} />
                    <h2> {t("politic:title1")}</h2>
                    <div>{t("politic:text1")}</div>
                    <h2> {t("politic:title2")}</h2>
                    <div>{t("politic:text2")}</div>
                    <h2> {t("politic:title3")}</h2>
                    <div>{t("politic:text3")}</div>
                    <h2> {t("politic:title4")}</h2>
                    <div>{t("politic:text4")}</div>
                    <h2> {t("politic:title5")}</h2>
                    <div>{t("politic:text5")}</div>
                    <h2> {t("politic:title6")}</h2>
                    <div>{t("politic:text6")}</div>
                    <h2> {t("politic:title7")}</h2>
                    <div>{t("politic:text7")}</div>
                    <h2> {t("politic:title8")}</h2>
                    <div>{t("politic:text8")}</div>
                </div>
            </TranslationsProvider>
        </>
    );
}
