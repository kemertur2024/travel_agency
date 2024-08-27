import cl from "./Blog.module.css";
import Title from "@/components/layout/Title";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { Posts } from "@/lib/Blog";
import BlogItem from "@/components/blog/BlogItem";

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
    "blog",
];

export default async function Reviews({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);
    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.blog_wrapper}>
                    <Title text={t("blog")} />
                    {Posts.map((item) => (
                        <div className={cl.item_wrapper} key={item.id}>
                            <BlogItem item={item} className={cl.item} />
                        </div>
                    ))}
                </div>
            </TranslationsProvider>
        </>
    );
}
