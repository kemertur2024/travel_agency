import cl from "./WhatsApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsApp() {
    return (
        <a
            href='https://api.whatsapp.com/send/?phone=905350449927&amp;text&amp;type=phone_number&amp;app_absent=0'
            className={cl.whatsapp}
            aria-label='Ватсап: +905350449927'
            rel='nofollow'
        >
            <FontAwesomeIcon
                className={cl.icons}
                icon={faWhatsapp}
                alt='иконка телефона'
            />
            WhatsApp
            <p className={cl.lamp}></p>
        </a>
    );
}
