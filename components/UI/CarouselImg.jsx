import cl from "./CarouselImg.module.css";

export default function CarouselImg({ images }) {
    return (
        <div className={cl.main_container}>
            <div className={cl.window}>
                <div className={cl.all_pages_container}>
                    {images.map((child) => (
                        <div className={cl.item_wrapper} key={child}>
                            <img src={child} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
