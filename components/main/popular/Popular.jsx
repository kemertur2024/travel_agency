import Title from "../../layout/Title";
import "./Popular.css";
import Carousel from "@/components/UI/Carousel";
import { exscursions } from "@/lib/Excursions";

export default function Popular() {
    const data = exscursions.filter((item) => item.popular == true);

    return (
        <>
            <Title text='popular' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
