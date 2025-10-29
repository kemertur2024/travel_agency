/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        API_URL: process.env.API_URL || "https://kemer-tur.net",
        FIRM_NAME: process.env.FIRM_NAME || "Кемер-Tур",

        WHATSAPP_LINK:
            process.env.WHATSAPP_LINK ||
            "https://api.whatsapp.com/send/?phone=905350449927&amp;text&amp;type=phone_number&amp;app_absent=0",
    },
};

export default nextConfig;
