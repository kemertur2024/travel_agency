"use client";

import cl from "./Form.module.css";
import { useTranslation } from "react-i18next";
import MyCustomButton from "./MyCustomButton";
import { useRef } from "react";
import TGMessage from "@/helpers/TGMessage";
import { useRouter } from "next/navigation";

export default function FormTransfer({ onSuccess }) {
    const { t } = useTranslation();
    const formRef = useRef(null);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        // Извлечение данных из FormData
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            date: formData.get("date"),
            email: formData.get("mail"),
            from: formData.get("from"),
            to: formData.get("to"),
            passengers: formData.get("passengers"),
            message: formData.get("message"),
        };

        // Вызов функции для отправки данных на WhatsApp
        TGMessage(data);
        onSuccess(); // Закрыть модальное окно после успешной отправки
        router.push("./thanks");
    };

    return (
        <>
            <form className={cl.form} ref={formRef} onSubmit={handleSubmit}>
                <span className={cl.form_title}>
                    {t("howtoorder:title_form")}
                </span>
                <div className={cl.input_wrapper}>
                    <input
                        name='name'
                        placeholder={t("howtoorder:form_name")}
                    />
                    <input
                        name='phone'
                        placeholder={t("howtoorder:form_phone")}
                    />
                    <input
                        name='date'
                        type='date'
                        placeholder={t("howtoorder:form_date")}
                    />
                    <input
                        name='mail'
                        placeholder={t("howtoorder:form_mail")}
                    />
                    <input
                        name='from'
                        placeholder={t("howtoorder:form_from")}
                    />
                    <input name='to' placeholder={t("howtoorder:form_to")} />
                    <input
                        name='passengers'
                        placeholder={t("howtoorder:form_passengers")}
                    />
                </div>
                <div className={cl.textarea_wrapper}>
                    <textarea
                        name='message'
                        rows='5'
                        placeholder={t("howtoorder:form_message")}
                    ></textarea>
                </div>
                <div className={cl.button_wrapper}>
                    <MyCustomButton type='submit'>
                        {t("howtoorder:form_button")}
                    </MyCustomButton>
                </div>
            </form>
        </>
    );
}
