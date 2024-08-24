"use client";

import cl from "./Form.module.css";
import { useTranslation } from "react-i18next";
import MyButton from "./MyButton";

export default function FormTransfer() {
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
                    <input placeholder={t("howtoorder:form_name")} />
                    <input placeholder={t("howtoorder:form_phone")} />
                    <input
                        type='date'
                        placeholder={t("howtoorder:form_date")}
                    />
                    <input placeholder={t("howtoorder:form_mail")} />
                    <input placeholder={t("howtoorder:form_from")} />
                    <input placeholder={t("howtoorder:form_to")} />
                    <input placeholder={t("howtoorder:form_passengers")} />
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
