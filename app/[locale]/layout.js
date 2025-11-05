import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import WhatsApp from "@/components/UI/whatsapp";

const i18nNameSpaces = [
    "HomePage",
    "Services",
    "header",
    "nav",
    "howtoorder",
    "excursions",
    "exscursionName",
    "transfers",
];

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: `Туристическое агенство "${process.env.FIRM_NAME}"`,
    description: `Экскурсии в Кемере от '${process.env.FIRM_NAME}' Анталия актуальные цены 2024, описание, отзывы, аренда яхты и авто трансферы Кемер - Анталия. Закажите экскурсию онлайн на нашем сайте без предоплаты.`,
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
                <head>
                    <meta
                        httpEquiv='content-type'
                        content='text/html; charset=UTF-8'
                    />
                    <meta name='msapplication-TileColor' content='#00aba9' />
                    <meta name='theme-color' content='#ffffff' />

                    <meta
                        name='yandex-verification'
                        content='951841930c189c24'
                    />

                    {/*Yandex.Metrika counter*/}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(98576941, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src='https://mc.yandex.ru/watch/98576941'
                                style={{
                                    position: "absolute",
                                    left: "-9999px",
                                }}
                                alt=''
                            />
                        </div>
                    </noscript>
                    {/* /Yandex.Metrika counter */}
                    {/* Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-5VQWKMQZ');
                            `,
                        }}
                    />
                    {/* End Google Tag Manager */}
                </head>
                <body>
                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe
                            src='https://www.googletagmanager.com/ns.html?id=GTM-5VQWKMQZ'
                            height='0'
                            width='0'
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>
                    {/* End Google Tag Manager (noscript) */}
                    <Header />
                    <WhatsApp />
                    <main>{children}</main>
                    <Footer locale={locale} />
                </body>
            </html>
        </TranslationsProvider>
    );
}
