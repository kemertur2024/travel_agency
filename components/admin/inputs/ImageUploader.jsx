"use client";

import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import style from "./ImageUploader.module.css";

export default function ImageUploader({
    label = "Фотографии:",
    folder = "default",
    images: initialImages = [],
    onChange,
}) {
    const [normalizedImages, setNormalizedImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const norm = initialImages.map((img) => ({
            ...img,
            id: img.id || img.public_id || `img-${Date.now()}-${Math.random()}`,
        }));
        setNormalizedImages(norm);
    }, [initialImages]);

    const updateParent = (newImages) => {
        setNormalizedImages(newImages);
        onChange?.(newImages);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newPreviews = files.map((file) => ({
            id: `preview-${Date.now()}-${file.name}-${Math.random()}`,
            file,
            url: URL.createObjectURL(file),
        }));
        setPreviews((prev) => [...prev, ...newPreviews]);
    };

    const uploadImages = async () => {
        if (!previews.length) return;
        setIsUploading(true);

        try {
            const uploaded = await Promise.all(
                previews.map(async (p) => {
                    const formData = new FormData();
                    formData.append("file", p.file);
                    formData.append("folder", folder);

                    const res = await fetch("/api/image-upload", {
                        method: "POST",
                        body: formData,
                    });
                    if (!res.ok) throw new Error("Ошибка загрузки файла");

                    const data = await res.json();
                    return {
                        id:
                            data.public_id ||
                            `uploaded-${Date.now()}-${Math.random()}`,
                        url: data.url,
                        public_id: data.public_id || null,
                        alt: "",
                    };
                })
            );

            updateParent([...normalizedImages, ...uploaded]);
            previews.forEach((p) => URL.revokeObjectURL(p.url));
            setPreviews([]);
        } catch (err) {
            console.error(err);
            alert("Ошибка загрузки изображений: " + (err.message || err));
        } finally {
            setIsUploading(false);
        }
    };

    // Локальное удаление изображения, без обращения к Cloudinary
    const removeImage = (id) => {
        const newImages = normalizedImages.filter((i) => i.id !== id);
        updateParent(newImages);
    };

    const handleAltChange = (id, value) => {
        const newImages = normalizedImages.map((img) =>
            img.id === id ? { ...img, alt: value } : img
        );
        updateParent(newImages);
    };

    const onDragEnd = ({ active, over }) => {
        if (!over || active.id === over.id) return;
        const oldIndex = normalizedImages.findIndex((i) => i.id === active.id);
        const newIndex = normalizedImages.findIndex((i) => i.id === over.id);
        const newImages = arrayMove(normalizedImages, oldIndex, newIndex);
        updateParent(newImages);
    };

    return (
        <div className={style.imageUploader}>
            <label>{label}</label>
            <input
                type='file'
                multiple
                accept='image/*'
                onChange={handleFileChange}
                className={style.fileInput}
            />

            {previews.length > 0 && (
                <div className={style.previewList}>
                    <h4>В очереди:</h4>
                    {previews.map((p) => (
                        <div key={p.id} className={style.imageItem}>
                            <img src={p.url} alt='' />
                            <button
                                type='button'
                                onClick={() =>
                                    setPreviews((prev) =>
                                        prev.filter((x) => x.id !== p.id)
                                    )
                                }
                                className={style.removeButton}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <button
                        type='button'
                        onClick={uploadImages}
                        disabled={isUploading}
                        className={style.uploadButton}
                    >
                        {isUploading ? "Загрузка..." : "Загрузить"}
                    </button>
                </div>
            )}

            {normalizedImages.length > 0 && (
                <>
                    <h4>Загруженные:</h4>
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={onDragEnd}
                    >
                        <SortableContext
                            items={normalizedImages.map((i) => i.id)}
                            strategy={rectSortingStrategy}
                        >
                            <div className={style.imagesGrid}>
                                {normalizedImages.map((img) => (
                                    <SortableImage
                                        key={img.id}
                                        id={img.id}
                                        img={img}
                                        onRemove={removeImage}
                                        onAltChange={handleAltChange}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </>
            )}
        </div>
    );
}

function SortableImage({ id, img, onRemove, onAltChange }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const dragStyle = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <>
            <div
                ref={setNodeRef}
                style={dragStyle}
                {...attributes}
                {...listeners}
                className={style.imageItem}
            >
                <img src={img.url} alt={img.alt || ""} />
                <input
                    type='text'
                    value={img.alt || ""}
                    placeholder='Alt текст'
                    onChange={(e) => onAltChange(id, e.target.value)}
                    className={style.altInput}
                />
            </div>
            <button
                type='button'
                onClick={() => onRemove(id)}
                className={style.removeButton}
            >
                ×
            </button>
        </>
    );
}
