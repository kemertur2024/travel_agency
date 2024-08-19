import Title from "../../layout/Title";
import "./Individual.css";
import Carousel from "@/components/UI/Carousel";
import { exscursions } from "@/lib/Excursions";

export default function Individual() {
    const data = exscursions.filter((item) => item.individual == true);

    return (
        <>
            <Title text='individual' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
