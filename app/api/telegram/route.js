export async function POST(req) {
    try {
        // Получаем данные из запроса
        const data = await req.json();

        if (!data || typeof data !== "object") {
            return new Response(JSON.stringify({ message: "Invalid data" }), {
                status: 400,
            });
        }

        // Проверяем переменные окружения
        const URI_API_TG = process.env.URI_API_TG;
        const CHAT_ID = process.env.CHAT_ID;

        if (!URI_API_TG || !CHAT_ID) {
            console.error("Ошибка: URI_API_TG или CHAT_ID не заданы!");
            return new Response(
                JSON.stringify({ message: "Server config error" }),
                { status: 500 }
            );
        }

        // Формируем сообщение
        let message = `<b>Заявка с сайта!</b>\n`;
        for (const [key, value] of Object.entries(data)) {
            message += `<b>${key}: </b>${value || "Не указан"}\n`;
        }

        // Отправка в Telegram
        const response = await fetch(URI_API_TG, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message,
            }),
        });

        // Логируем ответ от Telegram
        const json = await response.json();

        if (!response.ok) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: json.description || "Ошибка Telegram API",
                }),
                { status: 500 }
            );
        }

        return new Response(JSON.stringify({ success: true, result: json }), {
            status: 200,
        });
    } catch (err) {
        console.error("Ошибка отправки в Telegram:", err);
        return new Response(
            JSON.stringify({ success: false, message: "Ошибка при отправке" }),
            { status: 500 }
        );
    }
}
