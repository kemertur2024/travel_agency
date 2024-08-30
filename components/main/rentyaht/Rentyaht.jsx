import Title from "../../layout/Title";
import "./Rentyaht.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";
import { shuffleArray } from "@/helpers/helpers";

export default function RentYaht() {
    const tags = ["rent_yaht"];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);
    return (
        <>
            <Title text='rent_yaht' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
