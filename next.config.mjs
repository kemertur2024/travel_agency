/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        FIRM_NAME: "Кемер-Tур",
        I18NEXUS_API_KEY: "O6ZoOWWIqe-KXlcXt6yQyg",
        WHATSAPP_LINK:
            "https://api.whatsapp.com/send/?phone=905350449927&amp;text&amp;type=phone_number&amp;app_absent=0",

        CHAT_ID: "-1001910999829",
        URI_API_TG: `https://api.telegram.org/bot6071602927:AAHrz9Zz_U73G_1_YwxMjquPsGe5sC6WBAE/sendMessage`,
    },
};

export default nextConfig;
