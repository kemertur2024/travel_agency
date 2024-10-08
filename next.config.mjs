/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL || "https://kemer-tur.net",
        FIRM_NAME: process.env.FIRM_NAME || "Кемер-Tур",
        I18NEXUS_API_KEY:
            process.env.I18NEXUS_API_KEY || "O6ZoOWWIqe-KXlcXt6yQyg",
        WHATSAPP_LINK:
            process.env.WHATSAPP_LINK ||
            "https://api.whatsapp.com/send/?phone=905350449927&amp;text&amp;type=phone_number&amp;app_absent=0",
        CHAT_ID: process.env.CHAT_ID || "-1002154415645",
        URI_API_TG:
            process.env.URI_API_TG ||
            `https://api.telegram.org/bot7197991190:AAF3XgWX2feTTnHK9Dk_okaxkKQM3pgkFKM/sendMessage`,
    },
};

export default nextConfig;
