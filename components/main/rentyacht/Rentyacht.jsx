import Title from "../../layout/Title";
import "./Rentyacht.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";
import { shuffleArray } from "@/helpers/helpers";

export default function RentYacht() {
    const tags = ["rent_yacht"];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);
    return (
        <>
            <Title text='rent_yacht' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
