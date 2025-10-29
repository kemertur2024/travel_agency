import Title from "../../layout/Title";
import "./Popular.css";
import Carousel from "@/components/UI/Carousel";

export default function Popular({ category }) {
    return (
        <>
            <Title text='popular' />

            <section>
                <div className='wrapper'>
                    <Carousel category={category} />
                </div>
            </section>
        </>
    );
}
