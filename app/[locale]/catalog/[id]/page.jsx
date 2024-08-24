import { excursions } from "@/lib/Excursions";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import ProductDetails from "@/components/ProductDetails";

const i18nNameSpaces = [
    "HomePage",
    "Services",
    "nav",
    "header",
    "advantages",
    "excursions",
    "excursionName",
    "label",
];

export default async function ExcursionPage({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const item = excursions.find((item) => item.id == params.id);

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <ProductDetails item={item} />
            </TranslationsProvider>
        </>
    );
}
