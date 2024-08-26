import cl from "./Faq.module.css";
import Social from "@/components/UI/Soсial";
import { ContactsImages } from "@/lib/ContactsImg";
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
];

export default async function FaqPage({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const images = ContactsImages[0].images;

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.faq_wrapper}>
                    <Title text={t("faq")} />
                    <details>
                        <summary>{t("faq:question1")}</summary>
                        {t("faq:answer1")}
                    </details>
                    <details>
                        <summary>{t("faq:question2")}</summary>
                        {t("faq:answer2")}
                    </details>
                    <details>
                        <summary>{t("faq:question3")}</summary>
                        {t("faq:answer3")}
                    </details>
                    <details>
                        <summary>{t("faq:question4")}</summary>
                        {t("faq:answer4")}
                    </details>
                    <details>
                        <summary>{t("faq:question5")}</summary>
                        {t("faq:answer5")}
                    </details>
                    <details>
                        <summary>{t("faq:question6")}</summary>
                        {t("faq:answer6")}
                    </details>

                    <Social className={cl.contacts_carousel} />
                </div>
            </TranslationsProvider>
        </>
    );
}
