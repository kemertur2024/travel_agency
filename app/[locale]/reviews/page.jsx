import cl from "./Reviews.module.css";
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
];

export default async function Reviews({ params }) {
    const locale = params.locale;
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);
    return (
        <>
            <div className={cl.reviews_wrapper}>
                <div
                    style={{
                        width: "90vw",
                        height: "800px",
                        overflow: "hidden",
                        position: "relative",
                        margin: "auto",
                    }}
                >
                    <iframe
                        className={cl.iframe}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "1px solid #79af53",
                            borderRadius: "8px",
                            boxSizing: "border-box",
                        }}
                        src='https://yandex.ru/maps-reviews-widget/160008676421?comments'
                    ></iframe>
                    <a
                        href='https://yandex.ru/maps/org/bron_po_vottsap_ekskursii_ot_sultana/160008676421/'
                        target='_blank'
                        style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color: "#79af53",
                            fontSize: "10px",
                            fontFamily: "YS Text,sans-serif",
                            padding: "0 20px",
                            position: "absolute",
                            bottom: "8px",
                            width: "100%",
                            textAlign: "center",
                            left: "0",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "block",
                            maxHeight: "14px",
                            whiteSpace: "nowrap",
                            padding: "0 16px",
                            mboxSizing: "border-box",
                        }}
                    >
                        Отзывы о Kemer-tur.net на карте Кемера — Яндекс Карты
                    </a>
                </div>
            </div>
        </>
    );
}
