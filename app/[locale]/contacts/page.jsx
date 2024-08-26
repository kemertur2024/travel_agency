import cl from "./Contacts.module.css";
import Social from "@/components/UI/Soсial";

import CarouselImg from "@/components/UI/CarouselImg";
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
];

export default async function ContactsPage({ params }) {
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
                <div className={cl.contacts_wrapper}>
                    <Title text={t("contacts")} />
                    <CarouselImg images={images} />
                    <Social className={cl.contacts_carousel} />
                    <div>
                        <span className={cl.span_title}>
                            {t("howtoorder:contact_excutsion")}{" "}
                        </span>
                        <a href='tel:+905350449927' target='_blank'>
                            +90 535 044 99 27
                        </a>
                    </div>
                    <div>
                        <span className={cl.span_title}>
                            {t("howtoorder:contact_partners")}
                        </span>
                        <a href='tel:+905350449927' target='_blank'>
                            {" "}
                            +90 535 044 99 27
                        </a>
                    </div>
                    <div>
                        <span className={cl.span_title}> UÇAK BİLETİ NO:</span>
                        <a href='tel:+905350449927' target='_blank'>
                            {" "}
                            +90 535 044 99 27
                        </a>
                    </div>
                    <div>
                        <span className={cl.span_title}>
                            {t("howtoorder:contact_address")}
                        </span>
                        <span>
                            {" "}
                            Antalia Kemer Kiris Sahil Caddesi Viking Park Otel
                            40/G
                        </span>
                    </div>
                    <a
                        href='https://yandex.ru/maps/-/CDsWBKn0'
                        className={cl.map_wrapper}
                    >
                        <img
                            src='/images/contacts/contacts_map.webp'
                            alt='map'
                        />
                    </a>
                </div>
            </TranslationsProvider>
        </>
    );
}
