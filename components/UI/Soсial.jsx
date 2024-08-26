import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faTelegram,
    faWhatsapp,
    faInstagram,
    faTwitter,
    faViber,
} from "@fortawesome/free-brands-svg-icons";
import cl from "./Social.module.css";

export default function Social() {
    return (
        <>
            {" "}
            <div className={cl.footer__content}>
                <div className={cl.footer__icons}>
                    <a
                        href='https://wa.me/905350449927'
                        target='_blank'
                        className={cl.footer__link}
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faWhatsapp}
                        />
                    </a>
                    <a
                        href='viber://chat?number=+905350449927'
                        target='_blank'
                        className={cl.footer__link}
                    >
                        <FontAwesomeIcon className={cl.icons} icon={faViber} />
                    </a>
                    <a
                        href='mailto:kemertur2024@gmail.com?subject=Important-mail:&body=Hello.'
                        type='email'
                        className={cl.footer__link}
                        target='_blank'
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faEnvelope}
                        />
                    </a>
                    <a
                        href='https://t.me/+905350449927'
                        target='_blank'
                        className={cl.footer__link}
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faTelegram}
                        />
                    </a>

                    <a
                        href='https://www.instagram.com/sultan_kemer_kiris?igsh=M2UydWt4bnU2cmVk'
                        target='_blank'
                        className={cl.footer__link}
                    >
                        <FontAwesomeIcon
                            className={cl.icons}
                            icon={faInstagram}
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
