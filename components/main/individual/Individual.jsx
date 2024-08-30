import Title from "../../layout/Title";
import "./Individual.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";
import { shuffleArray } from "@/helpers/helpers";

export default function Individual() {
    const tags = ["individual"];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);

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
