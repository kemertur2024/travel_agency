import Title from "../../layout/Title";
import "./Individual.css";
import Carousel from "@/components/UI/Carousel";

export default function Individual({ category }) {
    return (
        <>
            <Title text='individual' />

            <section>
                <div className='wrapper'>
                    <Carousel category={category} />
                </div>
            </section>
        </>
    );
}
