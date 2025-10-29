import Title from "../../layout/Title";
import "./Rentauto.css";
import Carousel from "@/components/UI/Carousel";

export default function RentAuto({ category }) {
    return (
        <>
            <Title text='rent_auto' />

            <section>
                <div className='wrapper'>
                    <Carousel category={category} />
                </div>
            </section>
        </>
    );
}
