import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import "./HomePage.css";
import Services from "@/components/services/Services";

const i18nNameSpaces = ["HomePage", "Services"];

export default async function HomePage({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={i18nNameSpaces}
        >
            <main className='main'>
                <h1>{t("agency")}</h1>
                <Services />
            </main>
        </TranslationsProvider>
    );
}
