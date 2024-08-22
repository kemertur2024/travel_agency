"use client";

import cl from "./Form.module.css";
import { useTranslation } from "react-i18next";
import MyButton from "./myButton";

export default function Form() {
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form className={cl.form}>
                {" "}
                <span className={cl.form_title}>
                    {t("howtoorder:title_form")}
                </span>
                <div className={cl.input_wrapper}>
                    <input placeholder={t("howtoorder:form_phone")} />
                    <input placeholder={t("howtoorder:form_name")} />
                    <input
                        type='date'
                        placeholder={t("howtoorder:form_date")}
                    />
                    <input placeholder={t("howtoorder:form_mail")} />
                    <input placeholder={t("howtoorder:form_hotel")} />
                    <input placeholder={t("howtoorder:form_excursions")} />
                    <input placeholder={t("howtoorder:form_adult")} />
                    <input placeholder={t("howtoorder:form_kids_0_6")} />
                    <input placeholder={t("howtoorder:form_kids_7_11")} />
                </div>
                <div className={cl.textarea_wrapper}>
                    <textarea
                        rows='5'
                        placeholder={t("howtoorder:form_message")}
                    ></textarea>
                </div>
                <div className={cl.button_wrapper}>
                    <MyButton onClick={handleSubmit}>
                        {t("howtoorder:form_button")}
                    </MyButton>
                </div>
            </form>
        </>
    );
}
