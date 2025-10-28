import { useState } from "react";

export default function ImageUploader({ onUpload }) {
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = reader.result;
            const res = await fetch("/api/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ file: base64 }),
            });
            const data = await res.json();
            onUpload(data); // вернёт { url, public_id }
            setLoading(false);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type='file' onChange={handleFileChange} accept='image/*' />
            {loading && <p>Загрузка...</p>}
        </div>
    );
}
