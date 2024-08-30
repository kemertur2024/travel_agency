import { NavList } from "@/lib/NavList";
import ProductItem from "@/components/ProductItem";
import { filterByTags } from "@/helpers/helpers";
import cl from "./page.module.css";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Title from "@/components/layout/Title";
import { shuffleArray } from "@/helpers/helpers";

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
    const title = NavList.find((item) => item.nameKey == params.slug);

    const tags = [params.slug];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <Title text={title.nameKey} />
                <div className={cl.wrapper}>
                    {data.map((child) => (
                        <ProductItem child={child} key={child.id} />
                    ))}
                </div>
            </TranslationsProvider>
        </>
    );
}
