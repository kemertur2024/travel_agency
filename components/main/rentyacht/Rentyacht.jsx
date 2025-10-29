import Title from "../../layout/Title";
import "./Rentyacht.css";
import Carousel from "@/components/UI/Carousel";

export default function RentYacht({ category }) {
    return (
        <>
            <Title text='rent_yacht' />

            <section>
                <div className='wrapper'>
                    <Carousel category={category} />
                </div>
            </section>
        </>
    );
}
