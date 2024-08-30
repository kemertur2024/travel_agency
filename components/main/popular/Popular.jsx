import Title from "../../layout/Title";
import "./Popular.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";
import { shuffleArray } from "@/helpers/helpers";

export default function Popular() {
    const tags = ["popular"];
    const filteredData = filterByTags(tags);
    const data = shuffleArray(filteredData);

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
