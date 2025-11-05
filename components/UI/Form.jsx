"use client";

import cl from "./Form.module.css";
import { useTranslation } from "react-i18next";
import MyCustomButton from "./MyCustomButton";
import { useRef } from "react";
import TGMessage from "@/helpers/TGMessage";
import { useRouter } from "next/navigation";

export default function Form({ onSuccess }) {
    const { t, i18n } = useTranslation();

    const formRef = useRef(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        const data = {
            phone: formData.get("phone"),
            name: formData.get("name"),
            date: formData.get("date"),
            email: formData.get("mail"),
            hotel: formData.get("hotel"),
            excursions: formData.get("excursions"),
            adults: formData.get("adult"),
            kids_0_6: formData.get("kids_0_6"),
            kids_7_11: formData.get("kids_7_11"),
            message: formData.get("message"),
        };

        try {
            await TGMessage(data);
            onSuccess(); // закрыть модальное окно
            alert(
                i18n.language === "ru"
                    ? "Форма успешно отправлена! Спасибо за обращение."
                    : "Form submitted successfully! Thank you for your request."
            );
            router.push(`/${i18n.language}/thanks`); // локализованная страница
        } catch (err) {
            console.error("Ошибка отправки формы:", err);
            alert("Ошибка при отправке, попробуйте позже");
        }
    };

    return (
        <>
            <form className={cl.form} ref={formRef} onSubmit={handleSubmit}>
                <span className={cl.form_title}>
                    {t("howtoorder:title_form")}
                </span>
                <div className={cl.input_wrapper}>
                    <input
                        name='phone'
                        placeholder={t("howtoorder:form_phone")}
                    />
                    <input
                        name='name'
                        placeholder={t("howtoorder:form_name")}
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
                        name='hotel'
                        placeholder={t("howtoorder:form_hotel")}
                    />
                    <input
                        name='excursions'
                        placeholder={t("howtoorder:form_excursions")}
                    />
                    <input
                        name='adult'
                        placeholder={t("howtoorder:form_adult")}
                    />
                    <input
                        name='kids_0_6'
                        placeholder={t("howtoorder:form_kids_0_6")}
                    />
                    <input
                        name='kids_7_11'
                        placeholder={t("howtoorder:form_kids_7_11")}
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
