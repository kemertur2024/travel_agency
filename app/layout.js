import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: 'Туристическое агенство "Rom travel"',
    description:
        "Экскурсии в Кемере от 'Rom travel' ( Ром тревел ) Анталия актуальные цены 2024, описание, отзывы, аренда яхты и авто трансферы Кемер - Анталия. Закажите экскурсию онлайн на нашем сайте без предоплаты.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={open_sans.className}>{children}</body>
        </html>
    );
}
