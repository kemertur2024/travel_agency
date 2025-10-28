import Title from "../../layout/Title";
import "./Rentauto.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";
import { shuffleArray } from "@/helpers/helpers";

export default function RentAuto() {
    const tags = ["rent_auto"];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);

    return (
        <>
            <Title text='rent_auto' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
