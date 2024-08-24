export function gotowhatsapp(data) {
    const {
        name,
        phone,
        email,
        service,
        date,
        hotel,
        excursions,
        adults,
        kids_0_6,
        kids_7_11,
        message,
    } = data;

    const url = `https://wa.me/9162119006?text=
        Name: ${encodeURIComponent(name)}%0a
        Phone: ${encodeURIComponent(phone)}%0a
        Email: ${encodeURIComponent(email)}%0a
        Service: ${encodeURIComponent(service)}%0a
        Date: ${encodeURIComponent(date)}%0a
        Hotel: ${encodeURIComponent(hotel)}%0a
        Excursions: ${encodeURIComponent(excursions)}%0a
        Adults: ${encodeURIComponent(adults)}%0a
        Kids 0-6: ${encodeURIComponent(kids_0_6)}%0a
        Kids 7-11: ${encodeURIComponent(kids_7_11)}%0a
        Message: ${encodeURIComponent(message)}`;

    window.open(url, "_blank").focus();
}
