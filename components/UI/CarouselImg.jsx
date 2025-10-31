import cl from "./CarouselImg.module.css";

export default function CarouselImg({ images }) {
    console.log("img", images);

    return (
        <div className={cl.main_container}>
            <div className={cl.window}>
                <div className={cl.all_pages_container}>
                    {images.map((child, index) => (
                        <div
                            className={cl.item_wrapper}
                            key={child.id || index}
                        >
                            <img
                                src={child.url}
                                alt={child.alt || `carousel-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
