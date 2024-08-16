import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNameSpaces = ["HomePage", "Services", "header", "nav"];

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: 'Туристическое агенство "Rom travel"',
    description:
        "Экскурсии в Кемере от 'Rom travel' ( Ром тревел ) Анталия актуальные цены 2024, описание, отзывы, аренда яхты и авто трансферы Кемер - Анталия. Закажите экскурсию онлайн на нашем сайте без предоплаты.",
};

export default async function RootLayout({ children, params }) {
    const { locale } = params;

    const { t, resources } = await initTranslations(locale, i18nNameSpaces);
    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={i18nNameSpaces}
        >
            <html lang={locale} className={open_sans.className}>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </TranslationsProvider>
    );
}
