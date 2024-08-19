import Title from "../../layout/Title";
import "./Rentavto.css";
import Carousel from "@/components/UI/Carousel";
import { exscursions } from "@/lib/Excursions";

export default function RentAvto() {
    const data = exscursions.filter((item) => item.category == "avto");
    return (
        <>
            <Title text='rent_avto' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
