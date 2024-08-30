import MyCustomButton from "@/components/UI/MyCustomButton";
import cl from "./Thanks.module.css";
import Title from "@/components/layout/Title";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNameSpaces = ["nav", "blog", "button"];

export default async function Thanks({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);
    return (
        <>
            <TranslationsProvider
                resources={resources}
                locale={locale}
                namespaces={i18nNameSpaces}
            >
                <div className={cl.wrapper}>
                    <Title text={t("thanks")} />

                    <span className={cl.text}>{t("nav:thanks_text")}</span>
                    <a href='/'>
                        <MyCustomButton>{t("button:home")}</MyCustomButton>
                    </a>
                </div>
            </TranslationsProvider>
        </>
    );
}
