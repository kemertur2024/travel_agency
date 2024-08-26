import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import "./HomePage.css";
import Services from "@/components/main/services/Services";
import Advantages from "@/components/main/advantages/Advantages";
import Popular from "@/components/main/popular/Popular";
import RentYaht from "@/components/main/rentyaht/Rentyaht";
import RentAvto from "@/components/main/rentavto/Rentavto";
import Individual from "@/components/main/individual/Individual";

const i18nNameSpaces = [
    "HomePage",
    "Services",
    "nav",
    "header",
    "advantages",
    "excursiions",
    "excursionName",
    "label",
];

export default async function HomePage({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={i18nNameSpaces}
        >
            <main className='main'>
                <div style={{ visibility: "hidden" }}>
                    <h1 className='hiddenTitle'>{`Туристическое агенство ${process.env.FIRM_NAME}`}</h1>
                </div>
                <Services />
                <Popular />
                <RentYaht />
                <RentAvto />
                <Individual />
                <Advantages />
            </main>
        </TranslationsProvider>
    );
}
