const TGMessage = async (data) => {
    try {
        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const json = await res.json();
        if (json.success) {
            console.log("Запрос отправлен. Спасибо за обращение!");
        } else {
            console.log("Ошибка:", json.message);
        }
    } catch (err) {
        console.log("Ошибка при отправке запроса! Попробуйте позже.", err);
    }
};

export default TGMessage;
