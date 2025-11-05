"use client";

import { useState } from "react";
import MyButton from "./MyCustomButton";
import MyModal from "./MyCustomModal";
import Form from "./Form";

const texts = {
    ru: "Заказать ",
    en: "Order",
};

export default function OrderButton({ locale }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSuccess = () => setIsOpen(false);

    return (
        <>
            <MyButton onClick={toggleOpen}>{texts[locale]}</MyButton>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Form onSuccess={handleSuccess} />
            </MyModal>
        </>
    );
}
