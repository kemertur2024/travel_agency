import { Posts } from "@/lib/Blog";
import cl from "./Post.module.css";
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
    "blog",
];

export default async function PostDetailsPage({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);
    const item = Posts.find((item) => item.id == params.id);

    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.postitem_wrapper}>
                    <div className={cl.postitem}>
                        <div className={cl.first}>
                            <div className={cl.date}>{item.postDate}</div>
                            <div className={cl.img_wrapper}>
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                        <h2 className={cl.second}>
                            {t(`blog:${item.titleKey}`)}
                        </h2>
                        <div className={cl.second}>
                            {t(`blog:${item.articleKey}`)}
                        </div>
                    </div>
                </div>{" "}
            </TranslationsProvider>
        </>
    );
}
